import HomePage from 'components/home-page'
import NewInvoice from 'components/new-invoice/new-invoice'
import Category from 'components/maintenance/category/category'

export const routes = [
    { path: '/', component: HomePage, display: 'Home' },
    { path: '/category', component: Category, display: 'Category' },
    { path: '/new-invoice', component: NewInvoice, display: 'Test'}
]
