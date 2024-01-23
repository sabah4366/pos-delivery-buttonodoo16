from odoo import http
from odoo.http import request


class PosExtensionController(http.Controller):

    @http.route('/pos_screen/create_order', type='json', auth='user')
    def create_order(self, **kwargs):
        order_data = kwargs.get('order_data', {})
        order = request.env['pos.order'].sudo().create({
            'delivery_type': order_data.get('delivery_type'),
            # Add other fields as needed
        })
        return {'order_id': order.id}
