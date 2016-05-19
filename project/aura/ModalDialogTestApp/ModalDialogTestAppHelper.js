({
	C:{
        ACTIONS:{
            SHOW_ALERT: 'Show Alert!',
            SHOW_CONFIRM: 'Show Confirm!',
            SHOW_LOADER: 'Show Loader!',
            SHOW_INPUT: 'Show Input!',
        }
    },
    showDialog: function(component, dialogType, dialogTitle, dialogContent, dialogInputValue, dialogInputPlaceholder, dialogContext, show){
        component.set('v.showDialog', !!show);
        component.set('v.dialogType', dialogType);
        component.set('v.dialogTitle', dialogTitle);
        component.set('v.dialogContent', dialogContent);
        component.set('v.dialogInputValue', dialogInputValue);
        component.set('v.dialogInputPlaceholder', dialogInputPlaceholder);
        component.set('v.dialogContext', dialogContext);
        
    },
})