/*
Copyright 2018 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#ifndef KEYBOARD_CONFIG_H
#define KEYBOARD_CONFIG_H
#include "hardware_config.h"

#define KEYBOARD_SIDE SINGLE

#define DEVICE_NAME_R                       "Calla60_R"                         /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_L                       "Calla60_L"                         /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_M                       "Calla60"                           /**< Name of device. Will be included in the advertising data. */

#define DEVICE_MODEL                        "Calla60_V1"                        /**< Name of device. Will be included in the advertising data. */

#define MANUFACTURER_NAME                   "weboards.com"                      /**< Manufacturer. Will be passed to Device Information Service. */


#define KEYMAP( \
    A00, A01, A02, A03, A04, A05,              A06, A07, A08, A09, A10, A11,    \
    B00, B01, B02, B03, B04, B05,              B06, B07, B08, B09, B10, B11,    \
    C00, C01, C02, C03, C04, C05, E05,    E06, C06, C07, C08, C09, C10, C11,    \
    D00, D01, D02, D03, D04, D05, E04,    E07, D06, D07, D08, D09, D10, D11,    \
                   E00, E01, E02, E03,    E08, E09, E10, E11                    \
) { \
    { A00,  A01,  A02,  A03,  A04,  A05,  A06,  A07,  A08,  A09,  A10,  A11, }, \
    { B00,  B01,  B02,  B03,  B04,  B05,  B06,  B07,  B08,  B09,  B10,  B11, }, \
    { C00,  C01,  C02,  C03,  C04,  C05,  C06,  C07,  C08,  C09,  C10,  C11, }, \
    { D00,  D01,  D02,  D03,  D04,  D05,  D06,  D07,  D08,  D09,  D10,  D11, }, \
    { E00,  E01,  E02,  E03,  E04,  E05,  E06,  E07,  E08,  E09,  E10,  E11  }  \
}

// Adjust hold/tap and doubletap timing
#define DOUBLETAP_TIME_LIMIT 200    // [default = 200]
#define TIME_TILL_HOLD 200          // [default = 200]
#define DEBOUNCETIME 3              // [default = 3] changing this to 1 and you will have problems with the debounce logic - repeated keys perhaps...

#endif /* KEYBOARD_CONFIG_H */
