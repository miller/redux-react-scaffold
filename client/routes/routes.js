import React from 'react'
import { Route } from 'react-router'
import App from './app/containers/App'
import ReactPage from './react/containers/ReactPage'
import ReactUIPage from './react/ui/containers/ReactUIPage'
import ReactDomPage from './react/dom/containers/ReactDomPage'
import ReactFlowPage from './react/flow/containers/ReactFlowPage'
import ReduxPage from './redux/containers/ReduxPage'
import MaterialCssPage from './materialcss/containers/MaterialCssPage'

export default (
  <Route path="/" component={App}>
  	<Route path="react" component={ReactPage}>
  		<Route path="ui" component={ReactUIPage}></Route>
  		<Route path="dom" component={ReactDomPage}></Route>
  		<Route path="flow" component={ReactFlowPage}></Route>
  	</Route>
  	<Route path="redux" component={ReduxPage}>
  	</Route>
  	<Route path="materialize-css" component={MaterialCssPage}>
  	</Route>
  </Route>
)
