import React, {useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

// Partner offer: Falcon Hosting budget VPS for running Wings.
// Update OFFER_URL / PROMO_CODE here (and the announcementBar in
// docusaurus.config.ts) if the offer changes.
const OFFER_URL =
  'https://falconhosting.co.uk/vps?utm_source=docs.jexpanel.com&utm_medium=referral&utm_campaign=jexpanel&discount_code=JEX20&tier=budget';
const PROMO_CODE = 'JEX20';

const FEATURES = [
  'KVM, so Docker just works',
  'Dedicated IPv4',
  'Path.net DDoS protection',
  'UK data centre',
];

type Props = {
  className?: string;
  /** Slimmer version for docs pages: no illustration or paragraph. */
  compact?: boolean;
};

export default function FalconBanner({
  className,
  compact = false,
}: Props): JSX.Element {
  const [copied, setCopied] = useState(false);
  const logo = useBaseUrl('/img/partners/falconhosting/logo.svg');
  const mark = useBaseUrl('/img/partners/falconhosting/mark.svg');
  const art = useBaseUrl('/img/partners/falconhosting/wings-node.svg');

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the code is visible anyway.
    }
  };

  return (
    <aside
      className={clsx(styles.banner, compact && styles.compact, className)}
      aria-label="Partner offer from Falcon Hosting">
      <img className={styles.decal} src={mark} alt="" aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.eyebrow}>
          <img className={styles.logo} src={logo} alt="Falcon Hosting" />
          <span className={styles.partner}>Partner offer</span>
        </div>

        <h2 className={styles.title}>
          Host your Wings node on a <span>budget UK VPS</span>
        </h2>
        {!compact && (
          <p className={styles.lead}>
            Falcon Hosting's Budget VPS plans start from{' '}
            <strong>£3.49/month</strong>, with full root access and 1&nbsp;Gbps
            unmetered bandwidth: a solid, affordable base for your Wings node.
          </p>
        )}

        <ul className={styles.features}>
          {compact && <li className={styles.price}>From £3.49/month</li>}
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            className={styles.cta}
            href={OFFER_URL}
            target="_blank"
            rel="noopener sponsored">
            View budget VPS plans
            <span aria-hidden="true">→</span>
          </a>

          <div className={styles.coupon}>
            <span className={styles.couponOff}>20% off</span>
            <code className={styles.couponCode}>{PROMO_CODE}</code>
            <button
              type="button"
              className={styles.copy}
              onClick={copyCode}
              aria-label={`Copy code ${PROMO_CODE}`}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {!compact && (
        <div className={styles.art} aria-hidden="true">
          <img src={art} alt="" />
        </div>
      )}
    </aside>
  );
}
