from odoo import models, fields,api

class CustomPosOrder(models.Model):
    _inherit = 'pos.order'


    # Add your custom fields here
    delivery_country_related = fields.Many2one( string='Delivery Country' ,comodel_name='res.country', compute='_compute_delivery_country' )
    delivery_type_related = fields.Selection([
        ('domestic', 'Domestic'),
        ('international', 'International'),
    ], string='Delivery Type',related='lines.delivery_type')
    expected_delivery_date_related = fields.Date('Expected Delivery Date',related='lines.expected_delivery_date')
    card_number = fields.Char('Card Number')
    expiry_date = fields.Date('Expiry Date')

    @api.depends('lines')
    def _compute_delivery_country(self):
        for rec in self:
           if rec.lines:
               for line in rec.lines:
                   country = line.delivery_country.id
               rec.delivery_country_related = country


class PosOrderLineInherit(models.Model):
    _inherit = 'pos.order.line'

    delivery_country = fields.Many2one('res.country' ,string='Delivery Country')
    delivery_type = fields.Selection([
        ('domestic', 'Domestic'),
        ('international', 'International'),
        ], string='Delivery Type')
    expected_delivery_date = fields.Date('Expected Delivery Date')