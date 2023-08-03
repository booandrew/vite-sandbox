import { parseLinksAndBoldText } from './parseLinksAndBoldText';
import { FAQ_ITEMS, PRICING_PLANS_FEATURES } from './consts';
import { PlanCategory, PLAN_FEATURE_ICONS } from './service-consts';
import CollapsePanel from './CollapsePanel';
import React, { useState } from 'react';
import VoiceoverIcon from './assets/icons/info.svg';

const Tooltip = ({ text, children, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            width: 200,
            textAlign: 'center',
          }}
        >
          <h3>{title}</h3>
          <div>{text}</div>
        </div>
      )}
    </div>
  );
};

const PRICING_HEAD_STYLE = {
  background: '-webkit-linear-gradient(45deg, #ffccff, #ff99cc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
};
const PLAN_CONTAINER_STYLE = { padding: 30, border: '1px solid' };
const SEPARATOR_STYLE = { width: '100%', height: 1, background: 'grey' };
const FEATURES_STYLE = { display: 'grid', rowGap: 24 };
const FEATURE_ITEM_STYLE = { display: 'flex', gap: 16 };

export const Plans = () => {
  const plans = Object.values(PlanCategory);
  return (
    <>
      {/* plans */}
      <h1 style={PRICING_HEAD_STYLE}>Прайсинг</h1>
      <div className="pricingContainer">
        {plans.map((plan, idx) => {
          return (
            <div key={plan + idx} style={PLAN_CONTAINER_STYLE}>
              <h2>{plan}</h2>
              <div style={SEPARATOR_STYLE} />
              <h3>Features</h3>
              <div style={FEATURES_STYLE}>
                {PRICING_PLANS_FEATURES[plan].map((feature, idx) => {
                  return (
                    <div
                      key={feature.description + idx}
                      style={FEATURE_ITEM_STYLE}
                    >
                      {PLAN_FEATURE_ICONS[feature.iconKey]}
                      <span>
                        <span>
                          {feature.isParsingRequire
                            ? parseLinksAndBoldText(feature.description)
                            : feature.description}
                        </span>
                        &nbsp;
                        {feature.link && (
                          <a
                            style={{ color: '#7F56D9' }}
                            target="_blank"
                            href={feature.link}
                          >
                            Learn more
                          </a>
                        )}
                        {feature.tooltipText && (
                          <Tooltip
                            title={feature.tooltipTitle}
                            text={feature.tooltipText}
                          >
                            <img src={VoiceoverIcon}></img>
                          </Tooltip>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
