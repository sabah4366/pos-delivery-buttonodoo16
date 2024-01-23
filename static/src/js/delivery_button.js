odoo.define("pos_screen.DeliveryDetailButton", function(require){
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { posbus } = require('point_of_sale.utils');
    const Registries = require('point_of_sale.Registries');
    const {useListener} = require('@web/core/utils/hooks')
//    const MyPopup = require('pos_screen.popup');

    class DeliveryDetailButton extends PosComponent {

        setup() {
            super.setup();
            useListener('click',this.onClick);

        }

        onClick() {
            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
            if (!selectedOrderline) return;
            this.showPopup('MyPopup', {
               title: this.env._t(''),
               body: this.env._t('This click is successfully done.'),
               delivery_country: 'Select', // Provide actual delivery country value
               delivery_type: 'Select..',   // Provide actual delivery type value
               expected_delivery_date: 'Select', // Provide expected delivery date

           });
        }

    }

    DeliveryDetailButton.template = 'DeliveryDetailButton';
    ProductScreen.addControlButton({
        component: DeliveryDetailButton,
        position: ['before','OrderlineCustomerNoteButton'],
    });

    Registries.Component.add(DeliveryDetailButton);
    return DeliveryDetailButton;1


})