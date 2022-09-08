window.lib2d = {}; // Global define for lib2d.. Maybe unsafe
window.lib2d.canvas = {
    element: null,
    id: null
};
window.lib2d.color = null;
window.lib2d.context = null;

window.lib2d.init = function () {
    temp = document.createElement("canvas");
    temp.id = Math.random().toString().substring(2,5);
    window.lib2d.canvas.id = temp.id;
    window.lib2d.canvas.element = temp;
    window.lib2d.context = temp.getContext("2d");
    document.appendChild(temp);
}

window.lib2d.drawRect(xmin,ymin,xmax,ymax) {
    window.lib2d.context.fillRect(xmin,ymin,xmax,ymax)
}