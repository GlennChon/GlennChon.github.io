import { Vector3 } from "three";

export const capTextPos = {
    R1: {
        100: {
            double: {
                primary: new Vector3(-0.0045, 0.00276, -0.0033),
                secondary: new Vector3(-0.0045, 0.00276, 0.0033),
            },
            escape: {
                primary: new Vector3(-0.0045, 0.00275, 0.001),

            },
            peach: {
                primary: new Vector3(-0.002, 0.0025, 0.002),

            },
        },
    },
    R2: {
        100: {
            single: {
                primary: new Vector3(-0.0045, 0.002, -0.0018),
            },
            del: {
                primary: new Vector3(-0.0048, 0.00199, 0.0005),
            },
            double: {
                primary: new Vector3(-0.0045, 0.002, -0.0033),
                secondary: new Vector3(-0.0045, 0.0022, 0.0033),
            },


        },
        150: {
            tab: {
                primary: new Vector3(-0.008, 0.0021, -0.0005),
                secondary: new Vector3(-0.0075, 0.0022, 0.0036),
            },
            back: {
                primary: new Vector3(-0.0080, 0.00205, 0.0022)
            }
        }
    },
    R3: {
        100: {
            single: {
                primary: new Vector3(-0.0045, 0.0018, -0.0018),
            },
            double: {
                primary: new Vector3(-0.0045, 0.0017, -0.0033),
                secondary: new Vector3(-0.0045, 0.0023, 0.0033),
            },
            pgUp: {
                primary: new Vector3(-0.0035, 0.00195, 0.0005)

            }
        },
        175: {
            caps: {
                primary: new Vector3(-0.0101, 0.0021, 0.0005),
            },
        },
        225: {
            enter: {
                primary: new Vector3(-0.015, 0.0024, 0.0025),
                secondary: new Vector3(-0.008, 0.002, 0.0005),
            }
        }

    },
    R4: {
        100: {
            single: {
                primary: new Vector3(-0.0045, 0.0018, -0.0018),

            },
            double: {
                primary: new Vector3(-0.0045, 0.00165, -0.0033),
                secondary: new Vector3(-0.0045, 0.0025, 0.0033),
            },
            pgDn: {
                primary: new Vector3(-0.0035, 0.00195, 0.0005)
            },
            vertical: {
                primary: new Vector3(-0.0065, 0.002, -0.00),
            },
            horizontal: {
                primary: new Vector3(-0.0065, 0.00208, 0.0005),
            },
        },
        125: {
            control: {
                primary: new Vector3(-0.008, 0.00208, 0.0005),
            },
            win: {
                primary: new Vector3(-0.0021, 0.0019, 0.0009),
            },
            alt: {
                primary: new Vector3(-0.008, 0.0021, 0.0005),
            },
            fn: {
                primary: new Vector3(-0.008, 0.00209, 0.0005),
            }
        },
        175: {
            control: {
                primary: new Vector3(-0.011, 0.00205, 0.0005),
            },
            shift: {
                primary: new Vector3(-0.012, 0.00235, 0.002),
                secondary: new Vector3(-0.005, 0.002, 0.0007),
            }
        },
        225: {
            shift: {
                primary: new Vector3(-0.015, 0.00235, 0.002),
                secondary: new Vector3(-0.008, 0.002, 0.0007),
            }
        },
    },

}