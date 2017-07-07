<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>


<div class="wsm_map_offices_block">

	<style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>

    <div id="map"></div>


	<div class="officeList">
		<?foreach($arResult["ITEMS"] as $arItem):?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		
		//create images
		//$arItem["IMAGE_S"] = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array('width'=>140, 'height'=>90), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		$arItem["IMAGE_B"] = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"], array('width'=>800, 'height'=>800), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		?>
		<div class="officeItem selector-office" data-city="<?=$arItem['CITY_ID']?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<div class="block">
				<h2><?echo $arItem["NAME"]?></h2>
				<?foreach($arItem["DISPLAY_PROPERTIES"] as $code => $prop):?>
					<p><? echo '<b>'.$prop['NAME'].'</b>: ';?>
                    <?if(is_array($prop["DISPLAY_VALUE"])):?>
                        <?=implode("&nbsp;/&nbsp;", $prop["DISPLAY_VALUE"]);?>
                    <?else:?>
                        <?=$prop["DISPLAY_VALUE"];?>
                    <?endif?></br></p>
				<?endforeach;?>
				
				<?if($arItem["HAVE_POSITION_ON_MAP"]):?>
				<a href="#" id="<?=$arItem["ID"]?>" class="b-center-map" ><?=GetMessage("WSM_SHOW_ON_MAP")?></a>
				<?endif;?>
				
				<?if($arItem["IMAGE_B"]):?>
				<a class="more foto fancybox" target="_blank" href="<?=$arItem["IMAGE_B"]['src']?>"><?=GetMessage("WSM_SHOW_IMAGE")?></a>
				<?endif;?>	
			</div>	
			
			<?/*
			<?if($arItem["IMAGE_S"]):?>
				<a class="image fancybox" target="_blank" href="<?=$arItem["IMAGE_B"]['src']?>">
					<img src="<?=$arItem["IMAGE_S"]['src']?>" alt="<?=$arItem["NAME"]?>"/>
				</a>
			<?endif;?>
			*/?>
		</div>
		<?endforeach;?>
	</div>
	<div style="clear:both;"></div>
</div>



<?
$data = "";
foreach($arResult["ITEMS"] as $arItem)
{
	$prop_data = "";
	foreach($arItem["DISPLAY_BALOON_PROPERTIES"] as $code => $prop)
    {
        if(is_array($prop['DISPLAY_VALUE']))
            $prop_data .= '<b>'.$prop['NAME'].'</b>: '.implode(', ', $prop['DISPLAY_VALUE']).'</br>';
        else
            $prop_data .= '<b>'.$prop['NAME'].'</b>: '.$prop['DISPLAY_VALUE'].'</br>';
    }


	$data .= $arItem['ID'].":{".
		'name: '.CUtil::PhpToJSObject($arItem['NAME'], false, true).','.
		'city: '.$arItem["IBLOCK_SECTION_ID"].','.
		'desc: '.CUtil::PhpToJSObject($arItem['PREVIEW_TEXT'], false, true).','.
		'prop: '.CUtil::PhpToJSObject($prop_data, false, true).','.   
		'center: ['.$arItem["PROPERTIES"][$arParams['POINT_POSITION']]['VALUE'].'],'.
		'url: "'.($arItem['DETAIL_PAGE_URL'] ? '<a href=\"'.$arItem['DETAIL_PAGE_URL'].'\">'.GetMessage("WSM_OFFICEMAP_PODROBNEE").'</a>' : '').'"'.
		'},';
	$officesData .= "[".CUtil::PhpToJSObject($arItem['NAME'], false, true).', '.$arItem["PROPERTIES"][$arParams['POINT_POSITION']]['VALUE'].', 12,'.$arItem['ID'].','.CUtil::PhpToJSObject($prop_data, false, true).' ]'.',';
}
//$data = rtrim($data,',');

?>
<script>


  
var offices = [<? print_r($officesData) ?>];

console.log(offices);

//set center office
	 
	var officeCoors = {};
	var center = {};


     
function initMap() {
    center.lat = offices[0][1];
    center.lng = offices[0][2];
    console.log(offices, center);

	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 12,
	    center: center
	});

	  	setMarkers(map);


	$('.b-center-map').click(function(){
		var outer = this;
		console.log(outer);
		for(var i = 0; i < offices.length; i++) {
			if(offices[i][4] == this.id) {
				officeCoors.lat = offices[i][1];
				officeCoors.lng = offices[i][2];
			}
		}
		setTimeout(function() {
			map.panTo(officeCoors);
		}, 100);

		
		console.log(officeCoors);

	});

}

function setMarkers(map) {

	for (var i = 0; i < offices.length; i++) {
		var office = offices[i];
		var marker = new google.maps.Marker({
		  position: {lat: office[1], lng: office[2]},
		  map: map,
		  //icon: image,
		  //shape: shape,
		  title: office[0],
		  zIndex: office[3]
		});
		var infoTooltip = '<strong style="font-family: robotobold; font-size: 12px;">' + office[0] + '</strong>' + '<br />' + office[5];
		console.log(infoTooltip);
		attachInfo(marker, infoTooltip.toString());
	}

}


function attachInfo(marker, office) {
  var infowindow = new google.maps.InfoWindow({
    content: office
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}


</script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVyeru818QBJqZobpg4tkgJJ4HatkU6Sk&callback=initMap">
</script>
