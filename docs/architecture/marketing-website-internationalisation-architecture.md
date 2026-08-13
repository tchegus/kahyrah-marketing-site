Marketing Website Internationalisation Architecture
Version: 1.0
Status: Proposed Architecture
Target: Kahyrah Marketing Website
________________________________________
1. Purpose
This document defines the architecture for introducing multilingual support to the Kahyrah marketing website.
The primary objective is to allow the website to serve both English and French audiences while maintaining a single codebase, consistent branding, excellent SEO, and a clean path towards future application internationalisation.
This document applies only to the marketing website.
The operational Council Revenue Platform remains English-only until French-speaking pilot users require a multilingual application.
________________________________________
2. Objectives
The architecture aims to achieve the following goals:
•	Support English and French from a single codebase. 
•	Maintain English as the default language. 
•	Deliver native-quality content rather than literal translations. 
•	Optimise SEO independently for each language. 
•	Preserve the existing React architecture. 
•	Minimise future maintenance effort. 
•	Establish localisation patterns reusable by the operational application. 
________________________________________
3. Scope
Included
•	Home page 
•	Product page 
•	Pilot Programme 
•	About 
•	Contact 
•	Navigation 
•	Footer 
•	SEO metadata 
•	Open Graph metadata 
•	Sitemap 
•	Static marketing content 
Excluded
The following remain outside the scope of this architecture:
•	Operational application 
•	Dashboard 
•	Authentication 
•	API responses 
•	Database 
•	Business workflows 
•	Audit events 
•	Product screenshots 
________________________________________
4. Guiding Principles
4.1 English remains the primary language
English is the default language.
Visitors accessing the root website will see the English version.
/
French content is served under
/fr
________________________________________
4.2 Native localisation rather than translation
French content should feel as though Kahyrah was designed for French public-sector organisations.
Avoid literal translations.
Adapt terminology where appropriate.
Example:
English
Built for UK councils and local authorities.
French
Conçue pour les communes, collectivités territoriales et administrations locales.
________________________________________
4.3 Single source of truth
Every user-facing string must originate from translation resources.
No English text should remain hardcoded inside React components.
________________________________________
4.4 Reusable localisation patterns
The architecture should establish conventions that can later be adopted by the operational application.
________________________________________
5. Technology Strategy
Existing stack
•	React 
•	React Router 
•	Static deployment 
Recommended localisation library
•	react-i18next 
Reason:
•	Mature ecosystem 
•	React-native integration 
•	Reusable within the future operational application 
•	No framework migration required 
________________________________________
6. Routing Strategy
English
/
/product
/pilot
/about
/contact
________________________________________
French
/fr
/fr/produit
/fr/pilote
/fr/a-propos
/fr/contact
________________________________________
A central route registry will maintain all language mappings.
________________________________________
7. Translation Resources
Recommended structure:
messages/

    en.json

    fr.json
Example:
{
  "hero": {
    "title": "...",
    "subtitle": "...",
    "cta": "..."
  }
}
No UI text should exist outside translation resources.
________________________________________
8. Language Selection
Provide a simple language selector:
EN | FR
Behaviour:
•	English is default. 
•	User selection persists using local storage or cookies. 
•	Browser language may be used only for initial suggestion. 
•	User choice always takes precedence. 
________________________________________
9. SEO Strategy
Each language maintains independent SEO metadata.
Including:
•	Page titles 
•	Meta descriptions 
•	Open Graph 
•	Twitter Cards 
•	Structured data 
•	Canonical URLs 
•	hreflang 
•	Sitemap 
Example:
English
Council Revenue Management Platform
French
Plateforme de gestion des recettes des collectivités
________________________________________
10. Product Screenshots
The marketing screenshots remain in English.
Reason:
•	Current application is English. 
•	Screenshots represent product evidence. 
•	Avoid unnecessary regeneration. 
Future roadmap:
Phase 1
English screenshots
↓
Phase 2
Application internationalised
↓
Phase 3
French screenshots regenerated.
________________________________________
11. Translation Philosophy
Translations should prioritise meaning over literal wording.
Examples:
English	French
Council	Collectivité
Local Authority	Collectivité locale
Merchant	Commerçant
Field Agent	Agent de terrain
Revenue Reconciliation	Rapprochement des recettes
Payment Recovery	Recouvrement des paiements
Operational Business Reporting	Reporting opérationnel et décisionnel
Request a Pilot	Demander une démonstration pilote
A dedicated Kahyrah Terminology & Translation Guide will govern all approved terminology.
________________________________________
12. Future Application Internationalisation
The operational application will later reuse the same localisation principles.
Future translation scope includes:
•	Navigation 
•	Forms 
•	Validation messages 
•	Dashboard labels 
•	Error messages 
•	Email templates 
•	PDFs 
•	QR cards 
•	Notifications 
•	Date formatting 
•	Number formatting 
•	Currency formatting 
Backend values remain language-neutral.
Example:
PRESENCE_CONFIRMED
↓
English
Presence Confirmed
↓
French
Présence confirmée
Only presentation labels are translated.
________________________________________
13. Implementation Roadmap
Phase 0
Architecture approval
________________________________________
Phase 1
Create terminology guide.
________________________________________
Phase 2
Introduce localisation infrastructure.
________________________________________
Phase 3
Extract all strings.
________________________________________
Phase 4
Write French content.
________________________________________
Phase 5
SEO localisation.
________________________________________
Phase 6
Responsive QA.
________________________________________
Phase 7
Future application internationalisation.
________________________________________
14. Success Criteria
The internationalisation project will be considered complete when:
•	English and French versions are available. 
•	Both versions are independently indexable by search engines. 
•	All marketing content is translated. 
•	No English strings remain hardcoded. 
•	User language preference is remembered. 
•	URLs are language-aware. 
•	SEO metadata is localised. 
•	The architecture is reusable by the operational application. 
•	The French version reads as a native public-sector website rather than a literal translation. 
________________________________________
Final Recommendation
I would add one section that we haven't discussed yet, but I think will become invaluable:
15. Governance & Translation Workflow
Rather than just saying "translate strings", define how translations will be managed:
•	English is always the source language. 
•	New English content cannot be merged until a French translation placeholder exists. 
•	Translation keys should be stable and semantic (e.g. hero.title, not text1). 
•	The Terminology & Translation Guide is the authoritative reference for wording. 
•	Any new marketing page must be delivered in both languages before release. 
That governance section will save a lot of maintenance effort as Kahyrah grows and prevents the English and French sites from drifting apart over time.

