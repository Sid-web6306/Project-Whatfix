(

    function elementClicked(e) {
        e.preventDefault();
        var targetId = e.target.parentNode.attributes["data-checkbox-id"].value;
        var checkbox = document.getElementById(targetId);
        if (checkbox.checked === true) {
            checkbox.checked = false;
        }
        else {
            checkbox.checked = true;
            if (currentOpenTab !== undefined) {
                currentOpenTab.checked = false;
            }
            currentOpenTab = checkbox;
        }
    }
}());