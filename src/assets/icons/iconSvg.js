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

const user_mini = `
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill="#0080FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.97095 15.7568C3.85157 12.2846 6.80473 11.3593 9.07563 11.3593C11.2472 11.3593 13.9606 12.8399 14.9391 15.6878C13.3441 17.1251 11.2324 18 8.91629 18C6.6375 18 4.55653 17.1531 2.97095 15.7568Z" fill="#D9D9D9"/>
    <circle cx="9.0001" cy="6.72813" r="3.23301" fill="#D9D9D9"/>
  </svg>
`;

export const BackIcon = ({ onPress }) => (
  <SvgXml xml={back} onPress={onPress} />
);
export const WriteIcon = ({ onPress }) => (
  <SvgXml xml={write} onPress={onPress} />
);
export const LeaveIcon = ({ onPress }) => (
  <SvgXml xml={leave} onPress={onPress} />
);

export const InputIcon = () => <SvgXml xml={input} />;
export const UserMini = () => <SvgXml xml={user_mini} />;

BackIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

WriteIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

LeaveIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};
