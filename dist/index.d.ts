import { AsYouType } from 'libphonenumber-js';
import { CountryCode } from 'libphonenumber-js';
import { getNumberType } from 'libphonenumber-js';
import { isValidPhoneNumber as matchIsValidTel } from 'libphonenumber-js';
import { MenuProps } from '@mui/material/Menu';
import { NumberType } from 'libphonenumber-js';
import { default as React_2 } from 'react';
import { TextFieldProps } from '@mui/material/TextField';

export { AsYouType }

declare type BaseTextFieldProps = Omit<TextFieldProps, 'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'>;

declare type FlagSize = `small` | 'medium';

export { getNumberType }

declare const ISO_CODES: CountryCode[];

export { matchIsValidTel }

export declare const MuiTelInput: React_2.ForwardRefExoticComponent<Omit<MuiTelInputProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare type MuiTelInputContinent = 'EU' | 'AS' | 'NA' | 'SA' | 'OC' | 'AF';

export declare type MuiTelInputCountry = (typeof ISO_CODES)[number];

export declare interface MuiTelInputInfo {
    countryCode: MuiTelInputCountry | null;
    countryCallingCode: string | null;
    nationalNumber: string | null;
    numberType: Exclude<NumberType, undefined> | null;
    numberValue: string | null;
    reason: MuiTelInputReason;
}

export declare interface MuiTelInputProps extends BaseTextFieldProps {
    excludedCountries?: MuiTelInputCountry[];
    onlyCountries?: MuiTelInputCountry[];
    preferredCountries?: MuiTelInputCountry[];
    defaultCountry?: MuiTelInputCountry;
    forceCallingCode?: boolean;
    focusOnSelectCountry?: boolean;
    disableDropdown?: boolean;
    flagSize?: FlagSize;
    langOfCountryName?: string;
    disableFormatting?: boolean;
    continents?: MuiTelInputContinent[];
    onChange?: (value: string, info: MuiTelInputInfo) => void;
    value?: string | undefined;
    MenuProps?: Partial<MenuProps>;
}

export declare type MuiTelInputReason = 'country' | 'input';

export { }
