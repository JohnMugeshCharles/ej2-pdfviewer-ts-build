define(["require", "exports", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderActionDescription = exports.renderDescription = exports.renderPropertyPane = void 0;
    function renderPropertyPane(ele) {
        var controlSection = document.getElementById('control-content');
        var elem = controlSection.querySelector(ele);
        var title;
        if (!elem) {
            return;
        }
        title = elem.getAttribute('title');
        var parentEle = elem.parentElement;
        elem = (0, ej2_base_1.detach)(elem);
        elem.classList.add('property-panel-table');
        var parentPane = (0, ej2_base_1.createElement)('div', {
            className: 'property-panel-section',
            innerHTML: "<div class=\"property-panel-header\">".concat(title, "</div><div class=\"property-panel-content\"></div>")
        });
        parentPane.children[1].appendChild(elem);
        parentEle.appendChild(parentPane);
    }
    exports.renderPropertyPane = renderPropertyPane;
    function renderDescription() {
        var header;
        var description = (0, ej2_base_1.select)('#description', (0, ej2_base_1.select)('#control-content'));
        var descElement = (0, ej2_base_1.select)('.description-section');
        var iDescription = (0, ej2_base_1.select)('#description', descElement);
        if (iDescription) {
            (0, ej2_base_1.detach)(iDescription);
        }
        if (description) {
            descElement.appendChild(description);
        }
    }
    exports.renderDescription = renderDescription;
    function renderActionDescription() {
        var aDescription = (0, ej2_base_1.select)('#action-description', (0, ej2_base_1.select)('#control-content'));
        var aDescElem = (0, ej2_base_1.select)('.sb-action-description');
        if (aDescription) {
            aDescElem.innerHTML = '';
            aDescElem.appendChild(aDescription);
            aDescElem.style.display = '';
        }
        else if (aDescElem) {
            aDescElem.style.display = 'none';
        }
        var loadEle = document.getElementById('sb-content');
        if (loadEle.ej2_instances[0]) {
            loadEle.ej2_instances[0].tbObj.refreshOverflow();
        }
    }
    exports.renderActionDescription = renderActionDescription;
});
