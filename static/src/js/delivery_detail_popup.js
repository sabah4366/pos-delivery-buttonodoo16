odoo.define('pos_screen.popup', function (require) {
    'use strict';
    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useState, useRef } = owl;
    const { _t } = require("web.core");
    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');

    class MyPopup extends AbstractAwaitablePopup {
        setup() {
            super.setup();
            const partner = this.props.partner;
            this.changes = useState({
                delivery_country: null , // Initialize with a placeholder value
                delivery_type: null,
                expected_delivery_date: null,
            });


        }
        async confirm() {
            await super.confirm()
            var self = this;
            const selectedOrderline = this.env.pos.get_order();

            var delivery_type_fld = document.getElementById("delivery_type");
            var delivery_date_fld = document.getElementById("delivery_date");
            var delivery_country_name = document.getElementById("delivery_country_name");
            selectedOrderline.set_delivery_type(delivery_type_fld.value);
            selectedOrderline.set_delivery_date(delivery_date_fld.value);
            selectedOrderline.set_delivery_country(delivery_country_name.value);
            this.env.posbus.trigger('close-popup', {
            popupId: this.props.id });
            const value = this.env.pos.get_order()







        }

    }

    MyPopup.template = 'MyPopup';
    Registries.Component.add(MyPopup);
    return MyPopup;
});



