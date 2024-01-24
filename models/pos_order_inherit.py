from odoo import models, fields,api

class CustomPosOrder(models.Model):
    _inherit = 'pos.order'


    # Add your custom fields here
    pos_country = fields.Many2one( string='Delivery Country' ,comodel_name='res.country' )
    pos_delivery_type = fields.Selection([
        ('domestic', 'Domestic'),
        ('international', 'International'),
    ], string='Delivery Type')
    exp_delivery_date = fields.Date('Expected Delivery Date')
    card_number = fields.Char('Card Number')
    expiry_date = fields.Date('Expiry Date')

    @api.model
    def _order_fields(self, ui_order):
        res = super(CustomPosOrder, self)._order_fields(ui_order)
        CustomPosOrder.exp_delivery_date = ui_order.get('exp_delivery_date')
        CustomPosOrder.pos_delivery_type = ui_order.get('pos_delivery_type')
        CustomPosOrder.pos_country = int(ui_order.get('pos_country'))

        return res

    @api.model
    def create(self, vals):
        res = super(CustomPosOrder, self).create(vals)
        res['exp_delivery_date'] =  CustomPosOrder.exp_delivery_date
        res['pos_delivery_type'] =  CustomPosOrder.pos_delivery_type
        res['pos_country'] =   CustomPosOrder.pos_country
        return res
