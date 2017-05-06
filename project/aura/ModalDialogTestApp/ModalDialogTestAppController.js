({
    dialogCallback: function(component, event, helper) {
        var context = event.getParam('context');
        var confirmResult = event.getParam('confirmResult');
        var inputResult = event.getParam('inputResult');
        var dialogType = event.getParam('dialogType');
        console.log(event.getParams());
        component.set('v.dialogResult', confirmResult);
        component.set('v.dialogInputResult', inputResult);
        component.set('v.dialogStatus',(context)?context.action:dialogType);
        
    },
    showAlert: function(component, event, helper) {

            helper.showDialog(component, 'ALERT', 
                              'THIS IS AN ALERT!',
                              'Hello world!',
                              null,
                              null, 
                              {
                                  action: helper.C.ACTIONS.SHOW_ALERT
                              },
                              true);
       
    },
    
    showConfirm: function(component, event, helper) {
            helper.showDialog(component, 'CONFIRM', 
                              'CONFIRM',
                              'Do you want to do this?',
                              null,
                              null, 
                              {
                                  action: helper.C.ACTIONS.SHOW_CONFIRM
                              },
                              true);

    },
    showLoader: function(component, event, helper) {

            helper.showDialog(component, 'LOADER', 
                              'Loading...',
                              'Data is loading...',
                              null,
                              null, 
                              {
                                  action: helper.C.ACTIONS.SHOW_LOADER
                              },
                              true);
    
        //simulates elaboration. . .
        setTimeout(function(){
        
                component.set('v.showDialog', false);
      
        }, 2000);
    },
    showInput: function(component, event, helper) {
        
            helper.showDialog(component, 'INPUT', 
                              'INPUT DIALOG',
                              'Hello!',
                              'My name is ',
                              'Write down your name...', 
                              {
                                  action: helper.C.ACTIONS.SHOW_INPUT
                              },
                              true);
    
    },
})