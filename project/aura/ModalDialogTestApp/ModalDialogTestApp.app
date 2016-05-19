<aura:application >
    <ltng:require styles="/resource/SLDS104/assets/styles/salesforce-lightning-design-system-ltng.css"/>
    <div class="slds">
        <div class="slds-page-header" role="banner">
            <div class="slds-media">
                <div class="slds-media__figure">
                    <c:svg ariaHidden="true" class="slds-icon slds-icon--large slds-icon-standard-account"
                           xlinkHref="/resource/SLDS104/assets/icons/standard-sprite/svg/symbols.svg#account">
                    </c:svg>
                </div>
                <div class="slds-media__body">
                    <p class="slds-page-header__title slds-truncate slds-align-middle" >Modal Dialog Test App</p>
                    <p class="slds-text-body--small slds-page-header__info"></p>
                </div>
            </div>
            <br/><br/>
            
            <button class="slds-button slds-button--neutral" onclick="{!c.showAlert}">Alert</button>
            <button class="slds-button slds-button--neutral" onclick="{!c.showConfirm}">Confirm</button>
            <button class="slds-button slds-button--neutral" onclick="{!c.showLoader}">Loading</button>
            <button class="slds-button slds-button--neutral" onclick="{!c.showInput}">Input</button>
            
        </div>
        
        
        <table class="slds-table slds-table--bordered slds-no-row-hover">
            <thead>
                <tr>
                    <th class="slds-cell-shrink">
                        <div class="slds-truncate">Result</div>
                    </th>
                    <th class="slds-cell-shrink">
                        <div class="slds-truncate">Status</div>
                    </th>
                    <th class="slds-cell-shrink">
                        <div class="slds-truncate">Input result</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="slds-truncate">{!v.dialogResult}</td>
                    <td class="slds-truncate">{!v.dialogStatus}</td>
                    <td class="slds-truncate">{!v.dialogInputResult}</td>
                </tr>
            </tbody>
        </table>
        
    </div><!-- .slds -->
    
    <c:ModalDialog type="{!v.dialogType}" 
                   title="{!v.dialogTitle}" 
                   content="{!v.dialogContent}" 
                   showDialog="{!v.showDialog}"
                   context="{!v.dialogContext}"
                   inputValue="{!v.dialogInputValue}"
                   inputPlaceholder="{!v.dialogInputPlaceholder}"
                   onClose="{!c.dialogCallback}" />
</aura:application>