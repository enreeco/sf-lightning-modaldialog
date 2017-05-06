({
	doInit : function(component, event, helper) {
	},

	onInputValueChange: function(component, event, helper){
		component.set('v.inputResult', component.get('v.inputValue'));
	},
    
    onShowDialogValueChange: function(component, event, helper){
		if(component.get('v.showDialog')) return;
		helper.fireEvent(component, false, null);
	},

	closeModal: function(component, event, helper){
	
			component.set('v.showDialog', false);
			helper.fireEvent(component, false, null);
	
	},
	closeModalInput: function(component, event, helper){
			component.set('v.showDialog', false);
			helper.fireEvent(component, true, component.get('v.inputResult'));
	},
	closeModalYes: function(component, event, helper){
			component.set('v.showDialog', false);
			helper.fireEvent(component, true, null);
	},

})