# -*- coding: utf-8 -*-
{
    'name': "Pos Dev",
    'summary': """
       Pos Dev""",
    'description': """
       Pos Dev
    """,
    'sequence': '-800',
    'author': "Abrus",
    'website': "http://www.abrusnetworks.com",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'POS',
    'version': '1.2',
    # any module necessary for this one to work correctly
    'depends': ['point_of_sale'],
    'installable':True,
    'application':True,
    # always loaded
    'data': [
        'views/pos_order_inherit.xml',
    ],
    'assets':{
        'point_of_sale.assets':[
            "pos_screen/static/src/js/delivery_button.js",
            "pos_screen/static/src/js/delivery_detail_popup.js",
            "pos_screen/static/src/js/pos_model.js",
            "pos_screen/static/src/xml/delivery_button.xml",
            "pos_screen/static/src/xml/delivery_detail_popup.xml",

        ]
    }

}
