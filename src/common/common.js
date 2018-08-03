exports.install = function(Vue, options) {
    Vue.prototype.changeData = function(msg) {
        alert(msg);
    };
    Vue.prototype.changeDate = function(msg) {
        alert('1111' + msg);
    };
};