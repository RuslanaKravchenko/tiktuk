import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from '../../utils/constants';

const Icon = ({ icon, size, color, className }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      color: color,
    },
  };

  function renderPath() {
    switch (icon) {
      case ICONS.ARROW_DOWN:
        return (
          <path
            d='M9.22594 9.81331L12.0036 12.6416L14.7812 9.81331C15.0604 9.52903 15.5114 9.52903 15.7906 9.81331C16.0698 10.0976 16.0698 10.5568 15.7906 10.8411L12.5047 14.1869C12.2255 14.4712 11.7745 14.4712 11.4953 14.1869L8.20939 10.8411C8.07533 10.7049 8 10.52 8 10.3272C8 10.1344 8.07533 9.9495 8.20939 9.81331C8.48858 9.53632 8.94675 9.52903 9.22594 9.81331Z'
            fill='currentColor'
          />
        );

      case ICONS.BURGER:
        return (
          <path
            d='M4.80078 16.0002C4.80078 16.442 5.15895 16.8002 5.60078 16.8002H18.4008C18.8426 16.8002 19.2008 16.442 19.2008 16.0002V16.0002C19.2008 15.5584 18.8426 15.2002 18.4008 15.2002H5.60078C5.15895 15.2002 4.80078 15.5584 4.80078 16.0002V16.0002ZM4.80078 12.0002C4.80078 12.442 5.15895 12.8002 5.60078 12.8002H18.4008C18.8426 12.8002 19.2008 12.442 19.2008 12.0002V12.0002C19.2008 11.5584 18.8426 11.2002 18.4008 11.2002H5.60078C5.15895 11.2002 4.80078 11.5584 4.80078 12.0002V12.0002ZM5.60078 7.2002C5.15895 7.2002 4.80078 7.55837 4.80078 8.0002V8.0002C4.80078 8.44202 5.15895 8.8002 5.60078 8.8002H18.4008C18.8426 8.8002 19.2008 8.44202 19.2008 8.0002V8.0002C19.2008 7.55837 18.8426 7.2002 18.4008 7.2002H5.60078Z'
            fill='currentColor'
          />
        );

      case ICONS.CLOSE:
        return (
          <path
            d='M16.714 6.6419C16.402 6.3299 15.898 6.3299 15.586 6.6419L11.674 10.5459L7.76202 6.6339C7.45002 6.3219 6.94602 6.3219 6.63402 6.6339C6.32202 6.9459 6.32202 7.4499 6.63402 7.7619L10.546 11.6739L6.63402 15.5859C6.32202 15.8979 6.32202 16.4019 6.63402 16.7139C6.94602 17.0259 7.45002 17.0259 7.76202 16.7139L11.674 12.8019L15.586 16.7139C15.898 17.0259 16.402 17.0259 16.714 16.7139C17.026 16.4019 17.026 15.8979 16.714 15.5859L12.802 11.6739L16.714 7.7619C17.018 7.4579 17.018 6.9459 16.714 6.6419V6.6419Z'
            fill='currentColor'
          />
        );

      case ICONS.PLAY:
        return <path d='M0 0L0 24L20 12L0 0Z' fill='currentColor' />;

      case ICONS.NEXT:
        return (
          <path
            d='M6.56758 12.8001H15.5036L12.3996 15.9041C12.0876 16.2161 12.0876 16.7281 12.3996 17.0401C12.7116 17.3521 13.2156 17.3521 13.5276 17.0401L17.9996 12.5681C18.3116 12.2561 18.3116 11.7521 17.9996 11.4401L13.5356 6.96007C13.2236 6.64807 12.7196 6.64807 12.4076 6.96007C12.0956 7.27207 12.0956 7.77607 12.4076 8.08807L15.5036 11.2001H6.56758C6.12758 11.2001 5.76758 11.5601 5.76758 12.0001C5.76758 12.4401 6.12758 12.8001 6.56758 12.8001Z'
            fill='currentColor'
          />
        );

      case ICONS.MARKER:
        return (
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.4909 2.33628C11.944 2.33628 12.3384 2.09185 12.5426 1.73111C15.1175 1.90647 17.4905 2.79492 19.4545 4.19479C20.2935 4.84461 21.0466 3.7948 20.3273 3.23795C18.1004 1.62227 15.3848 0.609427 12.4355 0.447646C12.2159 0.175107 11.8744 0 11.4909 0C10.8282 0 10.2909 0.522988 10.2909 1.16814C10.2909 1.8133 10.8282 2.33628 11.4909 2.33628ZM21.2 14.6549C21.2 19.816 16.9019 24 11.6 24C6.29812 24 2 19.816 2 14.6549C2 9.49369 6.29812 5.30973 11.6 5.30973C16.9019 5.30973 21.2 9.49369 21.2 14.6549ZM13.1273 14.6549C13.1273 15.476 12.4435 16.1416 11.6 16.1416C10.7565 16.1416 10.0727 15.476 10.0727 14.6549C10.0727 13.8338 10.7565 13.1681 11.6 13.1681C12.4435 13.1681 13.1273 13.8338 13.1273 14.6549Z'
            fill='currentColor'
          />
        );

      case ICONS.TWITTER:
        return (
          <path
            d='M9.032 19C15.0696 19 18.372 13.6132 18.372 8.94228C18.372 8.78894 18.372 8.63645 18.3624 8.48484C19.0048 7.98518 19.5592 7.36492 20 6.65506C19.4016 6.94107 18.7656 7.12887 18.1152 7.21158C18.8 6.76964 19.3128 6.07529 19.5584 5.25603C18.9136 5.66781 18.2088 5.95813 17.4736 6.11406C16.2304 4.6909 14.1512 4.62198 12.8288 5.96071C11.9768 6.82391 11.6144 8.11096 11.8792 9.33856C9.24 9.19555 6.7808 7.85337 5.1136 5.64541C4.2424 7.26068 4.688 9.3265 6.1304 10.3637C5.608 10.3473 5.0968 10.1957 4.64 9.92178V9.96657C4.6408 11.649 5.7424 13.098 7.2736 13.4314C6.7904 13.5736 6.2832 13.5942 5.792 13.4917C6.2216 14.9321 7.4544 15.9185 8.8584 15.9469C7.696 16.9307 6.26 17.4649 4.7816 17.4631C4.5208 17.4623 4.26 17.4459 4 17.4123C5.5016 18.4495 7.248 19 9.032 18.9974'
            fill='currentColor'
          />
        );

      case ICONS.LINKEDIN:
        return (
          <path
            d='M18.2762 18.3907H15.8385V13.9104C15.8385 12.6813 15.3223 11.9957 14.3965 11.9957C13.3891 11.9957 12.7913 12.7101 12.7913 13.9104V18.3907H10.3535V10.0689H12.7913V11.0048C12.7913 11.0048 13.5561 9.59521 15.2796 9.59521C17.0037 9.59521 18.2762 10.7001 18.2762 12.9866C18.2762 15.2726 18.2762 18.3907 18.2762 18.3907V18.3907Z M6.78826 7.99593C6.13163 7.99593 5.59961 7.45875 5.59961 6.7963C5.59961 6.13434 6.13163 5.59717 6.78826 5.59717C7.4444 5.59717 7.97642 6.13434 7.97642 6.7963C7.97691 7.45875 7.4444 7.99593 6.78826 7.99593V7.99593Z M5.59961 18.3904H7.97642V10.3945H5.59961V18.3904Z'
            fill='currentColor'
          />
        );

      case ICONS.GOOGLE:
        return (
          <path
            d='M19.4532 10.6027H12.726C12.726 11.3023 12.726 12.7015 12.7217 13.4011H16.62C16.4706 14.1007 15.941 15.0802 15.1926 15.5734C15.1919 15.5727 15.1912 15.5776 15.1898 15.5769C14.1948 16.2338 12.8818 16.3829 11.9069 16.187C10.3788 15.8833 9.16947 14.7752 8.67844 13.3675C8.6813 13.3655 8.68344 13.3459 8.68559 13.3445C8.37825 12.4714 8.37825 11.3023 8.68559 10.6027H8.68487C9.08084 9.31683 10.3266 8.14359 11.8569 7.82247C13.0877 7.56152 14.4764 7.84416 15.4978 8.79982C15.6336 8.6669 17.3776 6.96405 17.5084 6.82553C14.019 3.66541 8.43185 4.77708 6.34123 8.85789H6.34051C6.34051 8.85789 6.34123 8.85789 6.33694 8.86558V8.86558C5.30271 10.87 5.34559 13.2318 6.34409 15.1404C6.34123 15.1425 6.33908 15.1438 6.33694 15.1459C7.24181 16.902 8.88858 18.2487 10.8727 18.7615C12.9805 19.3142 15.6629 18.9364 17.4598 17.3112C17.4605 17.3119 17.4612 17.3126 17.4619 17.3133C18.9843 15.9421 19.9321 13.6061 19.4532 10.6027'
            fill='currentColor'
          />
        );

      case ICONS.USER:
        return (
          <path
            d='M12.4806 12.4798C10.3599 12.4798 8.64062 10.7606 8.64062 8.6398C8.64062 6.51903 10.3599 4.7998 12.4806 4.7998C14.6014 4.7998 16.3206 6.51903 16.3206 8.6398C16.3206 10.7606 14.6014 12.4798 12.4806 12.4798Z M12.4808 14.3999C15.044 14.3999 20.1608 15.6863 20.1608 18.2399V19.1999C20.1608 19.7279 19.7288 20.1599 19.2008 20.1599H5.76078C5.23278 20.1599 4.80078 19.7279 4.80078 19.1999V18.2399C4.80078 15.6863 9.91758 14.3999 12.4808 14.3999Z'
            fill='currentColor'
          />
        );

      case ICONS.EMAIL:
        return (
          <path
            d='M19.5331 4.7998H3.87695C2.80058 4.7998 1.92971 5.6638 1.92971 6.7198L1.91992 18.2398C1.91992 19.2958 2.80058 20.1598 3.87695 20.1598H19.5331C20.6095 20.1598 21.4902 19.2958 21.4902 18.2398V6.7198C21.4902 5.6638 20.6095 4.7998 19.5331 4.7998ZM19.1417 8.8798L12.2237 13.123C11.9105 13.315 11.4996 13.315 11.1864 13.123L4.26835 8.8798C4.02372 8.7262 3.87695 8.467 3.87695 8.1886C3.87695 7.5454 4.59126 7.1614 5.14901 7.4974L11.705 11.5198L18.2611 7.4974C18.8188 7.1614 19.5331 7.5454 19.5331 8.1886C19.5331 8.467 19.3864 8.7262 19.1417 8.8798Z'
            fill='currentColor'
          />
        );

      case ICONS.ARROW_DOWN:
        return (
          <path
            d='M9.22594 9.81331L12.0036 12.6416L14.7812 9.81331C15.0604 9.52903 15.5114 9.52903 15.7906 9.81331C16.0698 10.0976 16.0698 10.5568 15.7906 10.8411L12.5047 14.1869C12.2255 14.4712 11.7745 14.4712 11.4953 14.1869L8.20939 10.8411C8.07533 10.7049 8 10.52 8 10.3272C8 10.1344 8.07533 9.9495 8.20939 9.81331C8.48858 9.53632 8.94675 9.52903 9.22594 9.81331Z'
            fill='currentColor'
          />
        );

      case ICONS.ARROW_UP:
        return (
          <path
            d='M9.22594 14.1867L12.0036 11.3584L14.7812 14.1867C15.0604 14.471 15.5114 14.471 15.7906 14.1867C16.0698 13.9024 16.0698 13.4432 15.7906 13.1589L12.5047 9.81311C12.2255 9.52883 11.7745 9.52883 11.4953 9.81311L8.20939 13.1589C8.07533 13.2951 8 13.48 8 13.6728C8 13.8656 8.07533 14.0505 8.20939 14.1867C8.48858 14.4637 8.94675 14.471 9.22594 14.1867Z'
            fill='currentColor'
          />
        );

      // case ICONS.EMAIL:
      //   return (
      //     <path
      //       d='M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.LOCATION:
      //   return (
      //     <path
      //       d='M12 20.1366L16.95 15.1246C17.9289 14.1333 18.5955 12.8704 18.8656 11.4956C19.1356 10.1207 18.9969 8.69569 18.4671 7.40064C17.9373 6.10558 17.04 4.99868 15.8889 4.21991C14.7378 3.44114 13.3844 3.02548 12 3.02548C10.6156 3.02548 9.26222 3.44114 8.11109 4.21991C6.95996 4.99868 6.06275 6.10558 5.53292 7.40064C5.00308 8.69569 4.86442 10.1207 5.13445 11.4956C5.40449 12.8704 6.07111 14.1333 7.05 15.1246L12 20.1366ZM12 23L5.636 16.5563C4.37734 15.2819 3.52019 13.6581 3.17293 11.8905C2.82567 10.1228 3.00391 8.29051 3.6851 6.62539C4.36629 4.96027 5.51984 3.53707 6.99988 2.53576C8.47992 1.53445 10.22 1 12 1C13.78 1 15.5201 1.53445 17.0001 2.53576C18.4802 3.53707 19.6337 4.96027 20.3149 6.62539C20.9961 8.29051 21.1743 10.1228 20.8271 11.8905C20.4798 13.6581 19.6227 15.2819 18.364 16.5563L12 23V23ZM12 12.1377C12.5304 12.1377 13.0391 11.9243 13.4142 11.5445C13.7893 11.1648 14 10.6497 14 10.1126C14 9.57554 13.7893 9.06047 13.4142 8.6807C13.0391 8.30093 12.5304 8.08757 12 8.08757C11.4696 8.08757 10.9609 8.30093 10.5858 8.6807C10.2107 9.06047 10 9.57554 10 10.1126C10 10.6497 10.2107 11.1648 10.5858 11.5445C10.9609 11.9243 11.4696 12.1377 12 12.1377ZM12 14.1627C10.9391 14.1627 9.92172 13.736 9.17158 12.9765C8.42143 12.2169 8 11.1868 8 10.1126C8 9.03847 8.42143 8.00831 9.17158 7.24877C9.92172 6.48924 10.9391 6.06253 12 6.06253C13.0609 6.06253 14.0783 6.48924 14.8284 7.24877C15.5786 8.00831 16 9.03847 16 10.1126C16 11.1868 15.5786 12.2169 14.8284 12.9765C14.0783 13.736 13.0609 14.1627 12 14.1627Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.ARROW_LEFT:
      //   return (
      //     <path
      //       d='M7.828 10.9715H20V13.0285H7.828L13.192 18.5456L11.778 20L4 12L11.778 4L13.192 5.45436L7.828 10.9715Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.GEO_POSITION:
      //   return (
      //     <path
      //       d='M4.7507 4.84297L8.33129 17.3452L11.4009 11.22L17.0929 8.94824L4.7507 4.84297ZM2.66455 2.02619L21.654 8.34076C21.7523 8.37326 21.8381 8.43512 21.9 8.51797C21.9619 8.60081 21.9967 8.70062 21.9998 8.80388C22.0029 8.90714 21.9741 9.00884 21.9173 9.09522C21.8605 9.18159 21.7784 9.24845 21.6822 9.28673L12.8641 12.8057L8.39591 21.7214C8.35044 21.8122 8.27855 21.8872 8.18965 21.9365C8.10074 21.9858 7.99898 22.0072 7.89769 21.9979C7.7964 21.9885 7.7003 21.9488 7.622 21.884C7.5437 21.8192 7.48683 21.7324 7.45886 21.6348L2.01932 2.64173C1.99413 2.5535 1.99356 2.46007 2.01769 2.37154C2.04182 2.28301 2.08973 2.20273 2.15624 2.13938C2.22276 2.07602 2.30535 2.032 2.39511 2.01205C2.48487 1.9921 2.57839 1.99699 2.66556 2.02619H2.66455Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.SEARCH:
      //   return (
      //     <path
      //       d='M17.7832 16.3911L22 20.6069L20.6069 22L16.3911 17.7832C14.8224 19.0407 12.8713 19.7246 10.8609 19.7218C5.96968 19.7218 2 15.7521 2 10.8609C2 5.96968 5.96968 2 10.8609 2C15.7521 2 19.7218 5.96968 19.7218 10.8609C19.7246 12.8713 19.0407 14.8224 17.7832 16.3911ZM15.8082 15.6605C17.0577 14.3756 17.7555 12.6532 17.7527 10.8609C17.7527 7.05267 14.6681 3.96909 10.8609 3.96909C7.05267 3.96909 3.96909 7.05267 3.96909 10.8609C3.96909 14.6681 7.05267 17.7527 10.8609 17.7527C12.6532 17.7555 14.3756 17.0577 15.6605 15.8082L15.8082 15.6605Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.SMILE:
      //   return (
      //     <path
      //       fillRule='evenodd'
      //       clipRule='evenodd'
      //       d='M12 0C8.79497 0 5.78103 1.24844 3.51469 3.51469C1.24844 5.78103 0 8.79497 0 12C0 15.205 1.24844 18.219 3.51469 20.4853C5.78103 22.7516 8.79497 24 12 24C15.205 24 18.219 22.7516 20.4853 20.4853C22.7516 18.219 24 15.205 24 12C24 8.79497 22.7516 5.78103 20.4853 3.51469C18.219 1.24844 15.205 0 12 0ZM4.70912 4.70912C6.6568 2.76145 9.24557 1.68914 12 1.68914C14.7544 1.68914 17.3432 2.76145 19.2909 4.70912C21.2386 6.6568 22.3109 9.24557 22.3109 12C22.3109 14.7544 21.2386 17.3432 19.2909 19.2909C17.3432 21.2386 14.7544 22.3109 12 22.3109C9.24557 22.3109 6.6568 21.2386 4.70912 19.2909C2.76145 17.3432 1.68914 14.7544 1.68914 12C1.68914 9.24557 2.76145 6.6568 4.70912 4.70912ZM6.56205 14.6082L6.44173 14.3328L4.60032 15.1375L4.72062 15.4128C6.00675 18.3564 8.91317 20.2585 12.125 20.2585C15.3368 20.2585 18.2432 18.3564 19.5293 15.4129L19.6497 15.1375L17.8082 14.3329L17.6879 14.6082C16.7215 16.8199 14.538 18.2489 12.125 18.2489C9.71196 18.2489 7.52841 16.8199 6.56205 14.6082ZM8.99869 10.3604V10.0599C8.99869 9.44432 8.4974 8.94304 7.8818 8.94304C7.26621 8.94304 6.76494 9.44431 6.7649 10.0599L6.76489 10.3604H4.75536V10.0599C4.75536 8.33573 6.1576 6.93349 7.8818 6.93349C9.606 6.93349 11.0082 8.33573 11.0082 10.0599V10.3604H8.99869ZM17.4853 10.0599V10.3604H19.4948V10.0599C19.4948 8.33573 18.0926 6.93349 16.3684 6.93349C14.6442 6.93349 13.2419 8.33573 13.2419 10.0599V10.3604H15.2515L15.2515 10.0599C15.2515 9.44431 15.7528 8.94304 16.3684 8.94304C16.984 8.94304 17.4853 9.44432 17.4853 10.0599Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.REGION:
      //   return (
      //     <path
      //       d='M21 19H23V21H1V19H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V19H19V11H17V9H20C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.GRID:
      //   return (
      //     <path
      //       d='M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.EDUCATION:
      //   return (
      //     <path
      //       fillRule='evenodd'
      //       clipRule='evenodd'
      //       d='M11.0563 4.21724C11.6503 3.92759 12.3497 3.92759 12.9437 4.21724L23.7088 9.46644C24.0971 9.65575 24.0971 10.1955 23.7088 10.3848L20.5448 11.9276V15.8713C20.5448 16.2791 20.297 16.6483 19.9135 16.812L12.8459 19.8275C12.3067 20.0575 11.6933 20.0575 11.1541 19.8275L4.08647 16.812C3.70296 16.6483 3.4552 16.2791 3.4552 15.8713V11.9276L0.291167 10.3848C-0.0970559 10.1955 -0.0970558 9.65575 0.291168 9.46644L11.0563 4.21724ZM5.52097 12.9349V15.2131L11.1541 17.6165C11.6933 17.8466 12.3067 17.8466 12.8459 17.6165L18.479 15.2131V12.9349L12.9437 15.634C12.3497 15.9236 11.6503 15.9236 11.0563 15.634L5.52097 12.9349ZM3.99273 9.92561L11.0563 13.3699C11.6503 13.6595 12.3497 13.6595 12.9437 13.3699L20.0073 9.92561L12.9437 6.48134C12.3497 6.19169 11.6503 6.19169 11.0563 6.48134L3.99273 9.92561Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.ACHIEVMENTS:
      //   return (
      //     <path
      //       fillRule='evenodd'
      //       clipRule='evenodd'
      //       d='M13 16.938V19H18V21H6V19H11V16.938C9.0667 16.6942 7.28882 15.7533 6 14.2917C4.71119 12.8302 4.00003 10.9486 4 9V3H20V9C20 10.9486 19.2888 12.8302 18 14.2917C16.7112 15.7533 14.9333 16.6942 13 16.938V16.938ZM6 5V9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V5H6ZM1 5H3V9H1V5ZM21 5H23V9H21V5Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.MEGAPHONE:
      //   return (
      //     <path
      //       fillRule='evenodd'
      //       clipRule='evenodd'
      //       d='M17.8522 2.12238C17.5334 1.95265 17.143 1.95997 16.8314 2.14122L9.46641 6.42751H6.26894C5.46805 6.38974 4.70407 6.65706 4.11919 7.18024C3.95271 7.32912 3.80657 7.49503 3.6819 7.67341H2.24537C1.00694 7.67341 0 8.6303 0 9.80716V12.6188C0 13.7957 1.00694 14.7526 2.24537 14.7526H3.67699C3.90142 15.0793 4.19202 15.3629 4.53167 15.5867L2.43963 19.0302C2.30466 19.2523 2.26896 19.5166 2.34036 19.764C2.41185 20.0113 2.58457 20.2212 2.81999 20.3467L5.69068 21.8772C5.84636 21.9602 6.01639 22 6.18415 22C6.53227 22 6.87212 21.828 7.05916 21.5201L10.1143 16.4914L16.8429 20.2913C17.0018 20.3811 17.1803 20.426 17.3587 20.426C17.5308 20.426 17.7031 20.3842 17.858 20.3004C18.1735 20.1298 18.3684 19.8114 18.3684 19.4664V2.95953C18.3684 2.61229 18.1709 2.29213 17.8522 2.12238ZM7.70111 8.34765L9.56719 8.34972L9.66348 8.34983L16.396 4.66393V17.8051L9.70708 14.2106H6.27641C5.65353 14.1624 5.19125 13.6884 5.19125 13.1471V9.27889C5.19125 9.00811 5.30746 8.75279 5.50323 8.57768C5.68832 8.41215 5.92744 8.3301 6.18068 8.34485C6.19492 8.34566 6.61677 8.34634 7.15043 8.347C7.32501 8.34722 7.51156 8.34743 7.69972 8.34765L7.70111 8.34765ZM22.5654 6.21133C22.1711 5.83661 21.5318 5.83661 21.1375 6.21133L19.825 7.45859C19.4306 7.83329 19.4307 8.44085 19.825 8.81556C20.0221 9.00286 20.2811 9.09658 20.5389 9.09658C20.7968 9.09658 21.0559 9.00277 21.2529 8.81556L22.5654 7.56832C22.9598 7.19362 22.9598 6.58604 22.5654 6.21133ZM2.01944 9.80716C2.01944 9.68907 2.1211 9.59247 2.24537 9.59247H3.17181V12.8335H2.24537C2.1211 12.8335 2.01944 12.7369 2.01944 12.6188V9.80716ZM21.1341 10.2638C20.5765 10.2638 20.1244 10.6934 20.1244 11.2233C20.1244 11.7532 20.5765 12.1828 21.1341 12.1828H22.9903C23.5479 12.1828 24 11.7532 24 11.2233C24 10.6934 23.5479 10.2638 22.9903 10.2638H21.1341ZM21.2529 13.631C20.8586 13.2564 20.2193 13.2564 19.825 13.631C19.4306 14.0057 19.4307 14.6133 19.825 14.988L21.1375 16.2353C21.3346 16.4226 21.5936 16.5163 21.8514 16.5163C22.1093 16.5163 22.3684 16.4225 22.5654 16.2353C22.9598 15.8606 22.9598 15.253 22.5654 14.8783L21.2529 13.631ZM4.69961 19.1484L6.53362 16.1297H8.00226L5.80895 19.7398L4.69961 19.1484Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.STAR:
      //   return (
      //     <path
      //       d='M11.5 18.9989L4.39324 23L5.98024 14.9654L0 9.40354L8.08819 8.43873L11.5 1L14.9118 8.43873L23 9.40354L17.0198 14.9654L18.6068 23L11.5 18.9989ZM11.5 16.6761L15.7794 19.085L14.8231 14.2478L18.4234 10.8984L13.5535 10.3177L11.5 5.83923L9.44646 10.3187L4.57662 10.8984L8.17686 14.2478L7.22062 19.085L11.5 16.6761Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.FULLSCREEN:
      //   return (
      //     <path
      //       d='M20 3H22V9H20V5H16V3H20ZM4 3H8V5H4V9H2V3H4ZM20 19V15H22V21H16V19H20ZM4 19H8V21H2V15H4V19Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.CHECK:
      //   return (
      //     <path
      //       d='M10.3749 15.1769L19.5826 6L21 7.41153L10.3749 18L4 11.6471L5.41642 10.2356L10.3749 15.1769Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.SPECIALIZATION:
      //   return (
      //     <path
      //       d='M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.USER:
      //   return (
      //     <path
      //       d='M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.PROMOCODE:
      //   return (
      //     <path
      //       d='M2 9.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V14.5C2.66304 14.5 3.29893 14.2366 3.76777 13.7678C4.23661 13.2989 4.5 12.663 4.5 12C4.5 11.337 4.23661 10.7011 3.76777 10.2322C3.29893 9.76339 2.66304 9.5 2 9.5ZM14 5H4V7.968C4.75121 8.3403 5.38347 8.91505 5.8255 9.62746C6.26754 10.3399 6.50176 11.1616 6.50176 12C6.50176 12.8384 6.26754 13.6601 5.8255 14.3725C5.38347 15.085 4.75121 15.6597 4 16.032V19H14V5ZM16 5V19H20V16.032C19.2488 15.6597 18.6165 15.085 18.1745 14.3725C17.7325 13.6601 17.4982 12.8384 17.4982 12C17.4982 11.1616 17.7325 10.3399 18.1745 9.62746C18.6165 8.91505 19.2488 8.3403 20 7.968V5H16Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.WARNING:
      //   return (
      //     <path
      //       d='M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 13H11V15H9V13ZM9 5H11V11H9V5Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.DOWNLOAD:
      //   return (
      //     <path
      //       d='M3 19H21V21H3V19ZM13 13.172L19.071 7.1L20.485 8.514L12 17L3.515 8.515L4.929 7.1L11 13.17V2H13V13.172Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.CLOCK:
      //   return (
      //     <path
      //       d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM13 12H17V14H11V7H13V12Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.STUDIO:
      //   return (
      //     <path
      //       d='M21 20.9857C21 21.2547 20.8946 21.5127 20.7071 21.7029C20.5196 21.8931 20.2652 22 20 22H4C3.73478 22 3.48043 21.8931 3.29289 21.7029C3.10536 21.5127 3 21.2547 3 20.9857V10.3258C2.99989 10.1712 3.03462 10.0187 3.10152 9.87978C3.16841 9.74091 3.26572 9.61939 3.386 9.52448L11.386 3.2137C11.5615 3.0752 11.7776 3 12 3C12.2224 3 12.4385 3.0752 12.614 3.2137L20.614 9.52448C20.7343 9.61939 20.8316 9.74091 20.8985 9.87978C20.9654 10.0187 21.0001 10.1712 21 10.3258V20.9857V20.9857ZM19 19.9715V10.8207L12 5.29904L5 10.8207V19.9715H19ZM7 15.9144H17V17.9429H7V15.9144Z'
      //       fill='currentColor'
      //     />
      //   );

      // case ICONS.UAH:
      //   return (
      //     <path
      //       d='M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12ZM17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569ZM9.3935 16.7028C10.0044 17.2435 10.9207 17.5139 12.1424 17.5139C12.7833 17.5139 13.3842 17.4538 13.9449 17.3336C14.5057 17.2135 15.0014 17.0482 15.4321 16.8379V14.9453C14.9113 15.1556 14.3906 15.3258 13.8698 15.456C13.3491 15.5762 12.8184 15.6362 12.2776 15.6362C11.7568 15.6362 11.3663 15.5361 11.1059 15.3358C10.8456 15.1255 10.7154 14.8351 10.7154 14.4646C10.7154 14.1441 10.8105 13.8737 11.0008 13.6534H16.1381V12.5419H13.0287C13.3491 12.4017 13.6595 12.2514 13.96 12.0912C14.2604 11.921 14.5208 11.7107 14.7411 11.4603H16.1381V10.3488H15.372C15.4521 10.0583 15.4921 9.75791 15.4921 9.44747C15.4921 8.48611 15.1817 7.75507 14.5608 7.25436C13.95 6.74364 13.1238 6.48828 12.0823 6.48828C11.4514 6.48828 10.8506 6.55838 10.2798 6.69858C9.71896 6.82876 9.17819 7.00902 8.65746 7.23934L9.33341 9.01186C9.83412 8.81157 10.2848 8.65635 10.6853 8.5462C11.0959 8.43604 11.5015 8.38096 11.9021 8.38096C12.3427 8.38096 12.6782 8.47109 12.9085 8.65135C13.1488 8.8316 13.269 9.08196 13.269 9.40241C13.269 9.79296 13.1388 10.1084 12.8784 10.3488H7.86133V11.4603H10.6553C10.3448 11.6105 10.0645 11.7758 9.8141 11.956C9.56374 12.1363 9.34844 12.3316 9.16818 12.5419H7.86133V13.6534H8.59737C8.52727 13.8938 8.49222 14.1642 8.49222 14.4646C8.49222 15.4159 8.79265 16.162 9.3935 16.7028Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.ARROW_PREV:
      //   return (
      //     <path
      //       d='M7.828 10.9715H20V13.0285H7.828L13.192 18.5456L11.778 20L4 12L11.778 4L13.192 5.45436L7.828 10.9715Z'
      //       fill='currentColor'
      //     />
      //   );
      // case ICONS.ARROW_NEXT:
      //   return (
      //     <path
      //       d='M16.172 10.9715L10.808 5.45436L12.222 4L20 12L12.222 20L10.808 18.5456L16.172 13.0285H4V10.9715H16.172Z'
      //       fill='currentColor'
      //     />
      //   );
      default:
        return null;
    }
  }

  return (
    <svg
      style={styles.svg}
      width={`${size}px`}
      height={`${size}px`}
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      {renderPath()}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  color: 'currentColor',
};

export default Icon;