const math =  function(str){

    function sanitize(str) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "?": "&#",
            "!": "&#",
            ";": "&#",
            "|": "&gt",
        }
        const reg = /[&<>"'?!;|]/ig;
        return str.replace(reg, (match)=>(map[match]));
    }

    try {
        return new Function( `return ${sanitize(str)}`)()
    } catch (error) {
        return new Error('wrong entries')
    } 
}  

export default math