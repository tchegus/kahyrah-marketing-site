import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check, CTASection, Eyebrow, Icon, SectionHeading } from '../components/PageElements';
import { localizedPath } from '../i18n/routes';

export default function Pilot() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage === 'fr' ? 'fr' : 'en';
  const workflowPhases = t('pilot.workflow.phases', { returnObjects: true });

  return (
    <>
      <section className="page-hero pilot-page-hero section-pad">
        <div className="container page-hero-grid">
          <div>
            <Eyebrow>{t('pilot.hero.eyebrow')}</Eyebrow>
            <h1>{t('pilot.hero.title')}</h1>
            <p>{t('pilot.hero.copy')}</p>
            <Link className="button button-primary button-large" to={localizedPath('contact', locale)}>
              {t('pilot.hero.primaryCta')}
            </Link>
          </div>

          <div className="pilot-hero-card">
            <span>{t('pilot.hero.scope')}</span>
            <div className="scope-number">
              <b>{t('pilot.hero.merchantRange')}</b>
              <small>{t('pilot.hero.merchants')}</small>
            </div>
            <div className="scope-mini">
              <div>
                <b>{t('pilot.hero.agentRange')}</b>
                <small>{t('pilot.hero.agents')}</small>
              </div>
              <div>
                <b>{t('pilot.hero.supervisorRange')}</b>
                <small>{t('pilot.hero.supervisors')}</small>
              </div>
              <div>
                <b>{t('pilot.hero.weekRange')}</b>
                <small>{t('pilot.hero.weeks')}</small>
              </div>
            </div>
            <em>{t('pilot.hero.note')}</em>
          </div>
        </div>
      </section>

      <section className="section-pad pilot-includes">
        <div className="container split-heading-grid">
          <div>
            <Eyebrow>{t('pilot.includes.eyebrow')}</Eyebrow>
            <h2>{t('pilot.includes.title')}</h2>
          </div>
          <ul className="check-list">
            {t('pilot.includes.items', { returnObjects: true }).map((item) => <Check key={item}>{item}</Check>)}
          </ul>
        </div>
      </section>

      <section className="section-pad pilot-workflow">
        <div className="container">
          <SectionHeading
            eyebrow={t('pilot.workflow.eyebrow')}
            title={t('pilot.workflow.title')}
            copy={t('pilot.workflow.copy')}
            align="center"
          />
          <div className="pilot-workflow-phases">
            {workflowPhases.map((phase) => (
              <section className={`workflow-phase phase-${phase.phase.toLowerCase()}`} key={phase.phase}>
                <div className="workflow-phase-intro">
                  <span className="workflow-phase-icon"><Icon name={phase.icon} /></span>
                  <h3>{phase.phase}</h3>
                  <p>{phase.description}</p>
                </div>
                <div className={`workflow-step-grid workflow-step-count-${phase.steps.length}`}>
                  {phase.steps.map((step) => (
                    <article className="workflow-step-card" key={step.number}>
                      <span className="workflow-step-number">{step.number}</span>
                      <span className="workflow-step-icon"><Icon name={step.icon} /></span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.copy}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pilot-outcomes">
        <div className="container pilot-outcomes-card">
          <div className="icon-wrap large"><Icon name="chart" /></div>
          <div>
            <Eyebrow>{t('pilot.outcomes.eyebrow')}</Eyebrow>
            <h2>{t('pilot.outcomes.title')}</h2>
            <p>{t('pilot.outcomes.copy')}</p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={t('pilot.cta.eyebrow')}
        title={t('pilot.cta.title')}
        copy={t('pilot.cta.copy')}
        primaryLabel={t('pilot.cta.primary')}
        secondaryLabel={t('pilot.cta.secondary')}
      />
    </>
  );
}
