function MiniLogo() {
  return <span className="mini-logo"><i /><i /><i /></span>;
}

export function DashboardMockup({ compact = false }) {
  return (
    <div className={compact ? 'dashboard-mockup compact' : 'dashboard-mockup'} aria-label="Council Revenue Platform dashboard preview">
      <div className="mock-window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>Revenue operations</span>
        <span className="live-pill"><i /> Live</span>
      </div>
      <div className="dashboard-body">
        <aside className="mock-sidebar">
          <MiniLogo />
          {[0, 1, 2, 3, 4].map((item) => <span key={item} className={item === 0 ? 'active' : ''} />)}
        </aside>
        <div className="dashboard-content">
          <div className="mock-heading"><div><b>Operations overview</b><small>Tuesday, 23 June</small></div><em>Central Market</em></div>
          <div className="metric-row">
            <div><small>Expected revenue</small><b>€12,480</b><span>Today</span></div>
            <div><small>Collected</small><b>€10,920</b><span className="success">87.5%</span></div>
            <div><small>Present</small><b>146</b><span>of 158</span></div>
            <div><small>Open alerts</small><b>8</b><span className="warning">Review</span></div>
          </div>
          <div className="dashboard-lower">
            <div className="chart-card">
              <div className="card-caption"><b>Daily collections</b><span>Last 7 days</span></div>
              <div className="chart-area">
                {[48, 68, 55, 82, 72, 91, 84].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
            </div>
            <div className="activity-card">
              <div className="card-caption"><b>Field activity</b><span>Live</span></div>
              {[['AM', 'Amina M.', '24 scans'], ['JD', 'James D.', '21 scans'], ['PK', 'Peter K.', '18 scans']].map(([initials, name, value]) => (
                <div className="activity-row" key={name}><i>{initials}</i><span><b>{name}</b><small>Field agent</small></span><em>{value}</em></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="phone-mockup" aria-label="Mobile QR scanning preview">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-top"><MiniLogo /><span>Scan merchant</span><i>•••</i></div>
        <div className="scan-view">
          <div className="scan-grid" />
          <div className="scan-corners"><i /><i /><i /><i /></div>
          <div className="qr-mini">
            <span className="qr-pattern">▦</span>
          </div>
        </div>
        <div className="scan-copy"><b>Position QR inside the frame</b><small>Verification happens automatically</small></div>
        <div className="verified-strip"><i>✓</i><span><b>Camera ready</b><small>Secure council verification</small></span></div>
      </div>
    </div>
  );
}

export function QRCardMockup() {
  return (
    <div className="qr-card-mockup" aria-label="Printable merchant QR card preview">
      <div className="qr-card-brand"><MiniLogo /><span>Kahyrah</span><small>COUNCIL VERIFIED</small></div>
      <div className="qr-card-title"><small>MERCHANT ACCESS CARD</small><b>Central Market</b><span>Place FR-P-003</span></div>
      <div className="qr-large">▦</div>
      <div className="qr-merchant"><b>Pierre Martin</b><span>Market trader · Active</span></div>
      <div className="qr-card-footer"><span><i /> Scan daily</span><small>CRP-2400623</small></div>
    </div>
  );
}

export function HeroProductVisual() {
  return (
    <div className="hero-product-visual">
      <div className="visual-glow visual-glow-one" />
      <div className="visual-glow visual-glow-two" />
      <DashboardMockup />
      <div className="phone-float"><PhoneMockup /></div>
      <div className="qr-float"><QRCardMockup /></div>
      <div className="metric-float"><span>Collection rate</span><b>87.5%</b><small><i /> +4.8% this week</small></div>
    </div>
  );
}

export function ScreenshotPlaceholder({ type, title, copy }) {
  return (
    <div className={`screenshot-placeholder type-${type}`}>
      <div className="placeholder-label"><span>Product preview</span><em>Replace with live screenshot</em></div>
      {type === 'dashboard' && <DashboardMockup compact />}
      {type === 'scan' && <div className="single-phone"><PhoneMockup /></div>}
      {type === 'qr' && <div className="single-qr"><QRCardMockup /></div>}
      <div className="placeholder-caption"><b>{title}</b><p>{copy}</p></div>
    </div>
  );
}
