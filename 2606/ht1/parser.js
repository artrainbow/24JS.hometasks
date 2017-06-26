var parser= {
    string: function (bbcode) {
        var b = bbcode.split('<b>');
        for (var i = 0; i<b.length; i++){
            if(b[i] == '') {
                b[i] = '<strong>';
            }
        }
        b = b.join('');
        var b_ = b.split('</b>');

        for (var i = 0; i<b_.length; i++){
            if(b_[i] == '') {
                b_[i] = '</strong>';

            }
        }
        b_ = b_.join('');
        bbcode = b_;
        return bbcode;
    }
};
module.exports = parser;