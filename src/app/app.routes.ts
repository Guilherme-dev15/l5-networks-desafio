import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { CharactersList } from './features/characters/characters-list/characters-list';
import { EpisodesList } from './features/episodes/episodes-list/episodes-list';
import { CharacterDetail } from './features/characters/character-detail/character-detail';
import { EpisodeDetail } from './features/episodes/episode-detail/episode-detail';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    {
        path: '',
        component: DashboardLayout,
        children: [
            {path: 'profile', component: Profile},
            { path: 'characters', component: CharactersList, data: { showSearch: true } },
            { path: 'characters/:id', component: CharacterDetail },
            { path: 'episodes', component: EpisodesList, data: { showSearch: true } },
            { path: 'episodes/:id', component: EpisodeDetail },

        ]
    },


];
