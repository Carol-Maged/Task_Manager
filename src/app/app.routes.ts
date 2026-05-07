import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddTask } from './pages/add-task/add-task';
import { Tasks } from './pages/tasks/tasks';
import { Signup } from './pages/auth/signup/signup';
import { Login } from './pages/auth/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:Home
    },
    { 
        path: 'add-task', 
        canActivate: [authGuard],
        component: AddTask 
    },
    { 
        path: 'tasks', 
        canActivate: [authGuard],
        component: Tasks 
    },
    {
        path:'Sign-up',
        component:Signup
    },
    {
        path: 'login', 
        component: Login 
    },
    {
    path: 'edit-task/:id',
    loadComponent: () =>
        import('./pages/add-task/add-task')
        .then(m => m.AddTask)
    }

];
