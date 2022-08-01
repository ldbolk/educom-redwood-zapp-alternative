// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TaaksLayout from 'src/layouts/TaaksLayout'

import KlantsLayout from 'src/layouts/KlantsLayout'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeaderLayout}>
        <Set wrap={TaaksLayout}>
          <Route path="/taken/new" page={TaakNewTaakPage} name="newTaak" />
          <Route path="/taken/{id:Int}/edit" page={TaakEditTaakPage} name="editTaak" />
          <Route path="/taken/{id:Int}" page={TaakTaakPage} name="taak" />
          <Route path="/taken" page={TaakTaaksPage} name="taken" />
        </Set>
        <Set wrap={KlantsLayout}>
          <Route path="/klanten/new" page={KlantNewKlantPage} name="newKlant" />
          <Route path="/klanten/{id:Int}/edit" page={KlantEditKlantPage} name="editKlant" />
          <Route path="/klanten/{id:Int}" page={KlantKlantPage} name="klant" />
          <Route path="/klanten" page={KlantKlantsPage} name="klanten" />
        </Set>
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
