({
	fireEvent : function(component, confirmResult, inputResult, context) {
		var evt = component.getEvent("onClose");
	        evt.setParams({
	        dialogType: component.get('v.type'),
	        confirmResult: confirmResult || false,
	        inputResult: inputResult || null,
	        context: component.get('v.context') || {},
	    });
	    evt.fire();
	}
})