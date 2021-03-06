import { Injectable } from '@angular/core';
import { MimeViewerIntl } from './viewer-intl';
import { HelpIntlNoNb } from './help-intl.no_nb';

@Injectable()
export class MimeViewerIntlNoNb extends MimeViewerIntl {
  help = new HelpIntlNoNb();
  closeLabel = 'Lukk';
  attributionLabel = 'Tillatelse';
  attributonCloseAriaLabel = 'Steng tillatelse dialog';
  contentsLabel = 'Innhold';
  twoPageViewLabel = 'Tosidevisning';
  singlePageViewLabel = 'Enkeltsidevisning';
  metadataLabel = 'Metadata';
  licenseLabel = 'Lisens';
  tocLabel = 'Innholdsfortegnelse';
  fullScreenLabel = 'Fullskjerm';
  exitFullScreenLabel = 'Avslutt fullskjerm';
  zoomInLabel = 'Zoom inn';
  zoomOutLabel = 'Zoom ut';
  previousPageLabel = 'Forrige side';
  nextPageLabel = 'Neste side';
  homeLabel = 'Hjem';
  searchLabel = 'Søk';
  clearSearchLabel = 'Tøm';
  previousHitLabel = 'Forrige treff';
  nextHitLabel = 'Neste treff';
  goToPageLabel = 'Gå til side';
  currentPageLabel = 'Nåværende side';
  enterPageNumber = 'Skriv inn sidenummer';
  dropDisabled = 'Beklager, men drag and drop er ikke aktivert';

  // ERRORS
  somethingHasGoneWrongLabel = 'Å nei! Noe har gått galt...';
  manifestUriMissingLabel = 'Lenke til manifest mangler';
  manifestNotValidLabel = 'Manifestet er ikke gyldig';
  pageDoesNotExists = 'Beklager, men den siden finnes ikke';

  noResultsFoundLabel = (q: string) => {
    return `Ingen treff funnet for <em class="current-search">${q}</em>`;
  };

  resultsFoundLabel = (numberOfHits: number, q: string) => {
    return `${numberOfHits} treff funnet for <em class="current-search">${q}</em>`;
  };

  currentHitLabel = (currentHit: number, numberOfHits: number) => {
    return `${currentHit} av ${numberOfHits} treff`;
  };
}
