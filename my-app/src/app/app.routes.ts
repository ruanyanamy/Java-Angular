import { Routes } from '@angular/router';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

export const routes: Routes = [
    {
        path : 'list-persons',
        component : ListPersonsComponent
    },
    {
        path : 'add-person',
        component : AddPersonComponent
    },
    {
        path : 'update-person/:id',
        component : UpdatePersonComponent
    },
    {
        path : 'delete-person/:id',
        component : DeletePersonComponent
    }

];
