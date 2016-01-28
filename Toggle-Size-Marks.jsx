// toggle Size-Marks

function toggleSizeMarks () {
    var docObj = activeDocument;
    for (i=0; i<docObj.layers.length; i++)
    {
        if (docObj.layers[i].name.indexOf('[SizeMark]') > -1) {
            docObj.layers[i].visible = !docObj.layers[i].visible;
        };
    }
}
toggleSizeMarks ();
