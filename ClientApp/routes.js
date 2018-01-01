import CounterExample from 'components/counter-example'
import Test from 'components/test'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import NewInvoice from 'components/new_invoice/new_invoice'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' },
    { path: '/new_invoice', component: NewInvoice, display: 'New Invoice', style: 'glyphicon glyphicon-th-list' }
]
