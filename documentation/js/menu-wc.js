'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-projekt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' : 'data-target="#xs-components-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' :
                                            'id="xs-components-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' }>
                                            <li class="link">
                                                <a href="components/AnnonceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnnonceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KategorierComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KategorierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogIndComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogIndComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MinSideComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinSideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MineAnnoncerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MineAnnoncerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpretAnnonceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpretAnnonceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpretBrugerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpretBrugerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RedigerAnnonceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RedigerAnnonceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RedigerBrugerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RedigerBrugerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartsideComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StartsideComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' : 'data-target="#xs-injectables-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' :
                                        'id="xs-injectables-links-module-AppModule-7efc9aecb2fdb7836b7bb3afdd3c44cc"' }>
                                        <li class="link">
                                            <a href="injectables/AnnonceDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnonceDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AnnonceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnonceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BrugerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BrugerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KategoriService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>KategoriService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResourceURLService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ResourceURLService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadImageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UploadImageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DetaljeretAnnonceComponent.html" data-type="entity-link">DetaljeretAnnonceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Annonce.html" data-type="entity-link">Annonce</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bruger.html" data-type="entity-link">Bruger</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageModel.html" data-type="entity-link">ImageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Kategorier.html" data-type="entity-link">Kategorier</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadBilleder.html" data-type="entity-link">UploadBilleder</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnnonceDataService.html" data-type="entity-link">AnnonceDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnonceService.html" data-type="entity-link">AnnonceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BrugerService.html" data-type="entity-link">BrugerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KategoriService.html" data-type="entity-link">KategoriService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResourceURLService.html" data-type="entity-link">ResourceURLService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadImageService.html" data-type="entity-link">UploadImageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AnnonceListResolver.html" data-type="entity-link">AnnonceListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AnnonceResolver.html" data-type="entity-link">AnnonceResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});