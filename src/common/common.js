exports.install = function(Vue, options) {
    Vue.prototype.changeData = function(msg) {
        alert(msg);
    };
};