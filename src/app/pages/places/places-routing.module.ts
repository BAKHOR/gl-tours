import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlacesPage } from "./places.page";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: PlacesPage,
    children: [
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: "./discover/discover.module#DiscoverPageModule"
          },
          {
            path: ":placeId",
            loadChildren:
              "./discover/place-detail/place-detail.module#PlaceDetailPageModule"
          }
        ]
      },
      {
        path: "profil",
        children: [
          {
            path: "",
            redirectTo: "/places/tabs/discover",
            pathMatch: "full"
          },
          {
            path: "edit/:profilId",
            loadChildren:
              "./profil/edit-profil/edit-profil.module#EditProfilPageModule",
            canLoad: [AuthGuard]
          },
          {
            path: ":profilId",
            loadChildren: "./profil/profil.module#ProfilPageModule"
          }
        ]
      },
      {
        path: "offers",
        children: [
          {
            path: "",
            loadChildren: "./offers/offers.module#OffersPageModule"
          },
          {
            path: "new",
            loadChildren:
              "./offers/new-offer/new-offer.module#NewOfferPageModule"
          },
          {
            path: "edit/:offerId",
            loadChildren:
              "./offers/edit-offer/edit-offer.module#EditOfferPageModule",
            canLoad: [AuthGuard]
          },
          {
            path: ":offerId",
            loadChildren:
              "./offers/offer-detail/offer-detail.module#OfferDetailPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/places/tabs/discover",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
