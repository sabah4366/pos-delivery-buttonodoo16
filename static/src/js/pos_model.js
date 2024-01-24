/** @odoo-module **/

import Registries from 'point_of_sale.Registries';
const {Order} = require('point_of_sale.models');

const   PosVelvetyDate = (Order) => class PosVelvetyDate extends Order  {
constructor(obj, options) {
        super(...arguments);
             this.pos_country = null;
             this.pos_delivery_type = null;
             this.exp_delivery_date = null;

        }

    set_delivery_type(note) {
        this.pos_delivery_type  = note
        }

    set_delivery_date(note) {
        this.exp_delivery_date = note;
        }

    set_delivery_country(note) {
        this.pos_country = note;
        }

    export_as_JSON() {

        const result = super.export_as_JSON(...arguments);
        result.pos_delivery_type = this.pos_delivery_type || false;
        result.exp_delivery_date = this.exp_delivery_date || false;
        result.pos_country = this.pos_country || false;

        return result;
    }
    init_from_JSON(json){
           super.init_from_JSON(...arguments);
            this.pos_country = json.pos_country || false;
            this.pos_delivery_type = json.pos_delivery_type || false;
            this.exp_delivery_date = json.exp_delivery_date || false;

        }

}
Registries.Model.extend(Order, PosVelvetyDate);












