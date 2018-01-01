import HomePage from 'components/home-page'
import NewInvoice from 'components/new-invoice/new-invoice'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/new-invoice', component: NewInvoice, display: 'New Invoice', style: 'glyphicon glyphicon-th-list' }
]
