import React from 'react';
import { UserCheck, Award, GitBranch, BarChart3 } from 'lucide-react';
import './ValueStrip.css';

export default function ValueStrip() {
  const items = [
    {
      title: 'BUILD THE TEAM',
      description: 'Recruit the right salespeople',
      icon: UserCheck,
    },
    {
      title: 'TRAIN THE PEOPLE',
      description: 'Develop practical sales skills',
      icon: Award,
    },
    {
      title: 'STRENGTHEN THE SYSTEM',
      description: 'Create repeatable sales processes',
      icon: GitBranch,
    },
    {
      title: 'IMPROVE PERFORMANCE',
      description: 'Track activity, conversion and outcomes',
      icon: BarChart3,
    },
  ];

  return (
    <section className="valuestrip-section" aria-label="Core Capabilities">
      <div className="container">
        <div className="valuestrip-wrapper">
          <div className="valuestrip-grid">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="valuestrip-item">
                  <div className="valuestrip-icon-box">
                    <IconComponent size={22} className="valuestrip-icon" />
                  </div>
                  <div className="valuestrip-text">
                    <span className="valuestrip-item-num">0{index + 1}</span>
                    <h3 className="valuestrip-title">{item.title}</h3>
                    <p className="valuestrip-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
