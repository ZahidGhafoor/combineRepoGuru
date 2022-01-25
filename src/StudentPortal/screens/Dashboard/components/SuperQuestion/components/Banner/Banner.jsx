import React from "react";
import "./Banner.css";
import { ReactComponent as Flag } from "../../../../../../assets/icons/flagIcon.svg";

const Banner = ({ variant }) => {
    return (
        <div className="banner">
            {variant === "1" && (
                <div className="banner__variant_1">
                    The Effect of alcohal is enhanced by medication. Especially large
                    amounts of alcohol in combination with sleeping pils, painkillers or
                    tranqulaizers can be life threatening. If you drink alcohol on an
                    empty stomach or consume a large amount of alcohol in a short period
                    of time, the alcohol enters your blood immedialtely, you are suddenly
                    dead drunk
                </div>
            )}
            {variant === "2" && (
                <div className="banner__variant_2">
                    <Flag className="banner__variant2_icon" />
                    <p className="banner__variant2_heading">REMARKS</p>
                    The Effect of alcohal is enhanced by medication. Especially large
                    amounts of alcohol in combination with sleeping pils, painkillers or
                    tranqulaizers can be life threatening. If you drink alcohol on an
                    empty stomach or consume a large amount of alcohol in a short period
                    of time, the alcohol enters your blood immedialtely, you are suddenly
                    dead drunk
                </div>
            )}
            {variant === "3" && (
                <div className="banner__variant_3">
                    <Flag className="banner__variant3_icon" />
                    <p className="banner__variant3_heading">REMARKS</p>
                    The Effect of alcohal is enhanced by medication. Especially large
                    amounts of alcohol in combination with sleeping pils, painkillers or
                    tranqulaizers can be life threatening. If you drink alcohol on an
                    empty stomach or consume a large amount of alcohol in a short period
                    of time, the alcohol enters your blood immedialtely, you are suddenly
                    dead drunk
                </div>
            )}
            {variant === "4" && (
                <div className="banner__variant_4">
                    <Flag className="banner__variant4_icon" />
                    <p className="banner__variant4_heading">REMARKS</p>
                    The Effect of alcohal is enhanced by medication. Especially large
                    amounts of alcohol in combination with sleeping pils, painkillers or
                    tranqulaizers can be life threatening. If you drink alcohol on an
                    empty stomach or consume a large amount of alcohol in a short period
                    of time, the alcohol enters your blood immedialtely, you are suddenly
                    dead drunk
                </div>
            )}
        </div>
    );
};

export default Banner;
