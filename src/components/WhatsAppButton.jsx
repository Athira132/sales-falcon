import React from 'react';
import { MessageSquare } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <aside className="sticky-whatsapp-container" aria-label="WhatsApp quick contact">
      <a
        href="https://wa.me/919633199772"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-whatsapp-btn"
        aria-label="Chat on WhatsApp with Sales Falcon (96331 99772)"
        id="sticky-whatsapp-link"
      >
        <div className="whatsapp-icon-circle">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="currentColor"
            className="whatsapp-svg"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.09 7.03C8.88 7.03 8.53 7.11 8.23 7.44C7.94 7.76 7.11 8.53 7.11 10.1C7.11 11.67 8.25 13.18 8.41 13.39C8.57 13.6 10.66 16.82 13.85 18.2C14.61 18.53 15.2 18.73 15.66 18.87C16.42 19.12 17.11 19.08 17.66 19C18.27 18.91 19.54 18.23 19.8 17.48C20.07 16.74 20.07 16.1 19.99 15.97C19.91 15.84 19.7 15.76 19.38 15.6C19.06 15.44 17.5 14.67 17.21 14.57C16.92 14.46 16.71 14.41 16.5 14.73C16.29 15.04 15.69 15.76 15.5 15.97C15.32 16.18 15.13 16.2 14.82 16.05C14.5 15.89 13.49 15.56 12.29 14.49C11.36 13.65 10.73 12.62 10.55 12.31C10.37 12 10.53 11.85 10.69 11.69C10.83 11.55 11 11.33 11.16 11.15C11.32 10.97 11.37 10.84 11.48 10.63C11.58 10.42 11.53 10.23 11.45 10.08C11.37 9.92 10.74 8.38 10.49 7.74C10.23 7.12 9.98 7.21 9.79 7.2C9.61 7.2 9.4 7.03 9.09 7.03Z" />
          </svg>
        </div>
        <span className="whatsapp-label desktop-only">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
