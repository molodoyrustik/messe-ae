export const IFESIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 6)">
      <path className="icon-secondary" d="M24 0C10.7453 0 0 10.7453 0 24C0 37.2547 10.7453 48 24 48C37.2547 48 48 37.2547 48 24C48 10.7453 37.2547 0 24 0ZM24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3Z" fill="#9D9D9D"/>
      <text x="24" y="30" textAnchor="middle" className="icon-primary" fill="#9D9D9D" fontSize="14" fontWeight="bold">IFES</text>
    </g>
  </svg>
);

export const EUIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" className="icon-secondary" fill="#9D9D9D"/>
    <g transform="translate(15, 15)">
      {/* EU stars in circle formation */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 15 + 10 * Math.cos(angle);
        const y = 15 + 10 * Math.sin(angle);
        return (
          <path
            key={i}
            className="icon-tertiary"
            d={`M${x},${y} l0.5,1.5 l1.5,0 l-1.2,1 l0.5,1.5 l-1.3,-1 l-1.3,1 l0.5,-1.5 l-1.2,-1 l1.5,0 z`}
            fill="#D9D9D9"
          />
        );
      })}
    </g>
    <text x="30" y="35" textAnchor="middle" className="icon-primary" fill="#FFFFFF" fontSize="10" fontWeight="500">EU</text>
  </svg>
);

export const BoxesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 6)">
      <path d="M48 17.6109L47.9559 31.4829L32.2726 39.5575L32.3166 25.6855L48 17.6109Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M32.3166 25.6853L32.2725 39.5573L16.4841 31.4807L16.5282 17.6087L32.3166 25.6853Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M47.9985 17.6114C23.9596 29.9916 59.2054 11.8302 32.3168 25.6878L16.5261 17.6068C16.6517 17.5421 31.5226 9.89018 32.213 9.53494L47.9985 17.6114Z" className="icon-tertiary" fill="#D9D9D9"/>
      <path d="M41.5 20.9567L38.8159 22.342L23.0252 14.2654L25.7138 12.8811L41.5 20.9567Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M41.4571 20.9908L41.465 23.6793H40.7713L40.1444 24.3549L39.4191 24.3709L38.8249 25.0306L38.8159 22.342L41.4571 20.9908Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M31.5159 26.0977L31.4718 39.9697L15.7885 48.0453L15.8336 34.1733L31.5159 26.0977Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M15.8336 34.1733L15.7884 48.0454L0 39.9688L0.0440576 26.0967L15.8336 34.1733Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M31.5144 26.0992C10.0242 37.1672 17.4362 33.3499 15.8327 34.1757L0.0419923 26.0947C0.168145 26.0298 15.8442 17.9635 15.7289 18.0228L31.5144 26.0992Z" className="icon-tertiary" fill="#D9D9D9"/>
      <path d="M25.0157 29.445L22.3316 30.8293L6.54088 22.7537L9.22952 21.3694L25.0157 29.445Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M24.9727 29.4791L24.9806 32.1676H24.287L23.6612 32.8432L22.9348 32.8593L22.3406 33.5179L22.3315 30.8293L24.9727 29.4791Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M38.6895 8.0757L38.6455 21.9477L22.9621 30.0233L23.0062 16.1513L38.6895 8.0757Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M23.0061 16.1513L22.9621 30.0234L7.17366 21.9458L7.21772 8.07375L23.0061 16.1513Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M38.6878 8.07674C17.1976 19.1447 24.6096 15.3274 23.0062 16.1532L7.21544 8.07216C7.34159 8.00725 23.0177 -0.0590264 22.9023 0.000325937L38.6878 8.07674Z" className="icon-tertiary" fill="#D9D9D9"/>
      <path d="M32.1892 11.4228L29.5051 12.8071L13.7144 4.7305L16.4031 3.3462L32.1892 11.4228Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M32.1453 11.4558L32.1543 14.1444L31.4607 14.1454L30.8337 14.82L30.1085 14.836L29.5142 15.4956L29.5052 12.8071L32.1453 11.4558Z" className="icon-secondary" fill="#7B7B7B"/>
    </g>
  </svg>
);

export const SupportIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 10)">
      <path d="M20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2Z" className="icon-primary" fill="#C4C4C4"/>
      <path d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6Z" className="icon-secondary" fill="#7B7B7B"/>
      <circle cx="20" cy="20" r="8" className="icon-tertiary" fill="#FFFFFF"/>
      <path d="M20 14C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13C19 13.5523 19.4477 14 20 14Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M20 28C20.5523 28 21 27.5523 21 27C21 26.4477 20.5523 26 20 26C19.4477 26 19 26.4477 19 27C19 27.5523 19.4477 28 20 28Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M13 21C13.5523 21 14 20.5523 14 20C14 19.4477 13.5523 19 13 19C12.4477 19 12 19.4477 12 20C12 20.5523 12.4477 21 13 21Z" className="icon-secondary" fill="#7B7B7B"/>
      <path d="M27 21C27.5523 21 28 20.5523 28 20C28 19.4477 27.5523 19 27 19C26.4477 19 26 19.4477 26 20C26 20.5523 26.4477 21 27 21Z" className="icon-secondary" fill="#7B7B7B"/>
    </g>
  </svg>
);