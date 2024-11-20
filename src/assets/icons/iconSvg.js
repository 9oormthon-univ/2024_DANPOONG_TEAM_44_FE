import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';

const back = `
  <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.66247 11.8409L13.8581 21.0418V18.0622L3.24922 10.6948L13.8581 3.7532V0.740783L0.66247 9.64705V11.8409Z" fill="#868686"/>
  </svg>
`;

const write = `
  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8462 10.9137L20.1222 4.41268L18.3828 2.73341L12.1067 9.2344L13.8462 10.9137ZM14.1217 13.4425C14.1919 13.4119 14.2574 13.3673 14.3139 13.3088L22.5323 4.79575C22.7631 4.55669 22.7564 4.17579 22.5174 3.945L18.7658 0.323309C18.5268 0.0925156 18.1459 0.0992221 17.9151 0.338288L9.69664 8.85132C9.64008 8.90991 9.59778 8.97701 9.56967 9.04834C9.46429 9.1489 9.39362 9.28986 9.3873 9.45928L9.24434 13.2948C9.23099 13.6529 9.53172 13.9432 9.88915 13.9173L13.7173 13.6394C13.8865 13.6271 14.0249 13.5515 14.1217 13.4425ZM2.00278 3.16922C2.00278 2.61541 2.45174 2.16644 3.00556 2.16644H11.0278C11.5816 2.16644 12.0306 1.71749 12.0306 1.16367C12.0306 0.609847 11.5816 0.160888 11.0278 0.160888H3.00556C1.3441 0.160888 -0.00277829 1.50776 -0.00277829 3.16922V17.9101C-0.00277829 19.5715 1.3441 20.9184 3.00556 20.9184H18.0472C19.7087 20.9184 21.0556 19.5715 21.0556 17.9101V17.6171V12.0016V10.6901H19.05V12.0016V17.6171V17.9101C19.05 18.4639 18.6011 18.9128 18.0472 18.9128H3.00556C2.45174 18.9128 2.00278 18.4639 2.00278 17.9101V3.16922Z" fill="#AFB1B6"/>
  </svg>
`;

const leave = `
  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4828 15.4366V21.0601C15.4828 21.7505 14.9231 22.3101 14.2328 22.3101H3.25C2.55964 22.3101 2 21.7505 2 21.0601V2.93945C2 2.2491 2.55964 1.68945 3.25 1.68945H14.2328C14.9231 1.68945 15.4828 2.2491 15.4828 2.93945V9.22394" stroke="#909298" stroke-width="2.36364" stroke-linejoin="round"/>
    <path d="M11.5173 12.2641C12.3633 12.2641 20.8583 12.2641 25.0001 12.2641M25.0001 12.2641L20.5058 8.03418M25.0001 12.2641L20.5058 16.6261" stroke="#909298" stroke-width="2.36364" stroke-linejoin="round"/>
  </svg>
`;

const input = `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#0080FF"/>
    <path d="M15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289L7.92893 11.6569C7.53841 12.0474 7.53841 12.6805 7.92893 13.0711C8.31946 13.4616 8.95262 13.4616 9.34315 13.0711L15 7.41421L20.6569 13.0711C21.0474 13.4616 21.6805 13.4616 22.0711 13.0711C22.4616 12.6805 22.4616 12.0474 22.0711 11.6569L15.7071 5.29289ZM16 25L16 6H14L14 25H16Z" fill="white"/>
  </svg>
`;

const upload_g = `
  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.9561V35.0449C3 37.8492 5.27331 40.1225 8.07757 40.1225H32.9224C35.7267 40.1225 38 37.8492 38 35.0449V21.9561" stroke="#A5A8AD" stroke-width="5" stroke-linecap="round"/>
    <path d="M20.6823 28.275V3M20.6823 3L13.9375 10.8984M20.6823 3L27.6094 10.8984" stroke="#A5A8AD" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const upload_b = `
  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.9561V35.0449C3 37.8492 5.27331 40.1225 8.07757 40.1225H32.9224C35.7267 40.1225 38 37.8492 38 35.0449V21.9561" stroke="#0080FF" stroke-width="5" stroke-linecap="round"/>
    <path d="M20.6823 28.275V3M20.6823 3L13.9375 10.8984M20.6823 3L27.6094 10.8984" stroke="#0080FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const place_g = `
  <svg width="40" height="53" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.2956 34.6968L6.29552 34.6967C3.02933 29.6048 1.5 25.127 1.5 21.2266C1.5 15.4178 3.31881 10.7304 6.90029 7.04241L6.90035 7.04235C10.5005 3.33469 14.8377 1.5 20 1.5C25.1623 1.5 29.4995 3.33469 33.0997 7.04235L33.0997 7.04241C36.6812 10.7304 38.5 15.4178 38.5 21.2266C38.5 25.127 36.9707 29.6048 33.7045 34.6967L33.7044 34.6968C30.6133 39.517 26.0586 44.7461 20 50.3826C13.9414 44.7461 9.38675 39.517 6.2956 34.6968Z" fill="#A5A8AD" stroke="#A5A8AD" stroke-width="3"/>
    <path d="M31.0466 20.124C31.0466 26.1563 26.1565 31.0464 20.1243 31.0464C14.092 31.0464 9.2019 26.1563 9.2019 20.124C9.2019 14.0918 14.092 9.20166 20.1243 9.20166C26.1565 9.20166 31.0466 14.0918 31.0466 20.124Z" fill="#F5F5F5" stroke="#A5A8AD" stroke-width="3"/>
  </svg>
`;

const place_b = `
  <svg width="40" height="53" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.2956 34.6968L6.29552 34.6967C3.02933 29.6048 1.5 25.127 1.5 21.2266C1.5 15.4178 3.31881 10.7304 6.90029 7.04241L6.90035 7.04235C10.5005 3.33469 14.8377 1.5 20 1.5C25.1623 1.5 29.4995 3.33469 33.0997 7.04235L33.0997 7.04241C36.6812 10.7304 38.5 15.4178 38.5 21.2266C38.5 25.127 36.9707 29.6048 33.7045 34.6967L33.7044 34.6968C30.6133 39.517 26.0586 44.7461 20 50.3826C13.9414 44.7461 9.38675 39.517 6.2956 34.6968Z" fill="#0080FF" stroke="#0080FF" stroke-width="3"/>
    <path d="M31.0464 20.124C31.0464 26.1563 26.1563 31.0464 20.124 31.0464C14.0918 31.0464 9.20166 26.1563 9.20166 20.124C9.20166 14.0918 14.0918 9.20166 20.124 9.20166C26.1563 9.20166 31.0464 14.0918 31.0464 20.124Z" fill="#DFEDFF" stroke="#0080FF" stroke-width="3"/>
  </svg>

`;

const user_mini = `
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="#0080FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.97095 15.7568C3.85157 12.2846 6.80473 11.3593 9.07563 11.3593C11.2472 11.3593 13.9606 12.8399 14.9391 15.6878C13.3441 17.1251 11.2324 18 8.91629 18C6.6375 18 4.55653 17.1531 2.97095 15.7568Z" fill="#D9D9D9"/>
    <circle cx="9.0001" cy="6.72813" r="3.23301" fill="#D9D9D9"/>
  </svg>
`;

const user_middle = `
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#0080FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25269 43.7688C10.6989 34.1237 18.9021 31.5533 25.2101 31.5533C31.2422 31.5533 38.7797 35.6664 41.4976 43.5774C37.0672 47.5698 31.2012 49.9999 24.7677 49.9999C18.4377 49.9999 12.6571 47.6473 8.25269 43.7688Z" fill="#D9D9D9"/>
    <circle cx="25.0001" cy="18.6893" r="8.98058" fill="#D9D9D9"/>
`;

const user_big = `
  <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 0 58.2107 0 37.5C0 16.7893 16.7893 0 37.5 0C58.2107 0 75 16.7893 75 37.5Z" fill="#0080FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3789 65.6533C16.0482 51.1856 28.353 47.3301 37.8151 47.3301C46.8631 47.3301 58.1694 53.4996 62.2463 65.3661C55.6006 71.3548 46.8017 75 37.1514 75C27.6564 75 18.9855 71.4711 12.3789 65.6533Z" fill="#D9D9D9"/>
    <circle cx="37.5002" cy="28.034" r="13.4709" fill="#D9D9D9"/>
  </svg>
`;

const moveTop = `
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="26" fill="#0080FF" fill-opacity="0.8"/>
    <path d="M26.7247 18L24.3155 18L15 34L18.7342 34L25.4197 21.8862L25.6606 21.8862L32.2658 34L36 34L26.7247 18Z" fill="#EDF0F5"/>
  </svg>
`;

const next = `
  <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.110396 12.5269L10.026 7.18774V6.28632L0.110396 0.924056V2.61132L7.73775 6.74858L0.110396 10.8396V12.5269Z" fill="#868686"/>
  </svg>
`;

export const InputIcon = () => <SvgXml xml={input} />;
export const UploadGIcon = () => <SvgXml xml={upload_g} />;
export const PlaceGIcon = () => <SvgXml xml={place_g} />;
export const UploadBIcon = () => <SvgXml xml={upload_b} />;
export const PlaceBIcon = () => <SvgXml xml={place_b} />;
export const UserMini = () => <SvgXml xml={user_mini} />;
export const UserMiddle = () => <SvgXml xml={user_middle} />;
export const UserBig = () => <SvgXml xml={user_big} />;
export const MoveTopIcon = () => <SvgXml xml={moveTop} />;
export const NextIcon = () => <SvgXml xml={next} />;

export const BackIcon = ({ onPress }) => (
  <SvgXml xml={back} onPress={onPress} />
);
export const WriteIcon = ({ onPress }) => (
  <SvgXml xml={write} onPress={onPress} />
);
export const LeaveIcon = ({ onPress }) => (
  <SvgXml xml={leave} onPress={onPress} />
);

BackIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

WriteIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

LeaveIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};
