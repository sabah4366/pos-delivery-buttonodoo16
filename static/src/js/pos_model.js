/** @odoo-module **/

import Registries from 'point_of_sale.Registries';
const {Orderline} = require('point_of_sale.models');

const   PosVelvetyDate = (Orderline) => class PosVelvetyDate extends Orderline  {

    set_delivery_type(note) {
        this.deliveryType = note;
        }

    set_delivery_date(note) {
        this.deliveryDate = note;
        }

    set_delivery_country(note) {
        this.deliveryCountry = note;
        }

    export_as_JSON() {

        const result = super.export_as_JSON(...arguments);
        result.delivery_type = this.deliveryType || null;
        result.expected_delivery_date = this.deliveryDate || null;
        result.delivery_country = this.deliveryCountry || null;

        return result;
    }

}
Registries.Model.extend(Orderline, PosVelvetyDate);












