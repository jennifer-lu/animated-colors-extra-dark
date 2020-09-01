/**
 * A minimal dark theme with animated color-changing highlights.
 *
 * @file   Controls the theme and animation.
 * @author Jennifer Lu
 * @since  1.0
 * @see    {@link https://github.com/jennifer-lu/Animated-Colors-Super-Dark}
 */

/**
 * The current color number within the animation.
 * @type {number}
 */
var colorNumber = 0;

/**
 * Whether the animation is reversed.
 * @type {boolean}
 */
var reverse = false;

/**
 * The array of colors in the animation.
 * @const {Array<string>}
 */
const colors = ["rgb(18, 194, 233)", "rgb(10, 193, 234)", "rgb(2, 193, 235)", "rgb(0, 192, 236)", "rgb(0, 191, 237)",
    "rgb(0, 190, 239)", "rgb(0, 190, 240)", "rgb(0, 189, 241)", "rgb(0, 188, 242)", "rgb(0, 187, 243)",
    "rgb(0, 186, 244)", "rgb(0, 185, 245)", "rgb(0, 184, 245)", "rgb(0, 184, 246)", "rgb(0, 183, 247)",
    "rgb(0, 182, 248)", "rgb(0, 181, 249)", "rgb(0, 180, 249)", "rgb(5, 179, 250)", "rgb(14, 178, 251)",
    "rgb(22, 177, 251)", "rgb(28, 176, 252)", "rgb(34, 175, 253)", "rgb(39, 174, 253)", "rgb(44, 173, 254)",
    "rgb(49, 172, 254)", "rgb(54, 170, 254)", "rgb(58, 169, 255)", "rgb(63, 168, 255)", "rgb(67, 167, 255)",
    "rgb(67, 167, 255)", "rgb(71, 166, 255)", "rgb(76, 165, 255)", "rgb(80, 163, 255)", "rgb(84, 162, 255)",
    "rgb(89, 161, 255)", "rgb(93, 159, 255)", "rgb(98, 158, 255)", "rgb(103, 156, 255)", "rgb(107, 155, 255)",
    "rgb(112, 153, 255)", "rgb(117, 152, 255)", "rgb(121, 150, 255)", "rgb(126, 148, 255)", "rgb(130, 146, 255)",
    "rgb(135, 145, 255)", "rgb(140, 143, 255)", "rgb(144, 141, 255)", "rgb(149, 139, 255)", "rgb(153, 137, 254)",
    "rgb(158, 135, 253)", "rgb(162, 133, 251)", "rgb(167, 130, 250)", "rgb(171, 128, 249)", "rgb(175, 126, 247)",
    "rgb(180, 123, 245)", "rgb(184, 121, 243)", "rgb(188, 118, 241)", "rgb(192, 116, 239)", "rgb(196, 113, 237)",
    "rgb(196, 113, 237)", "rgb(199, 112, 235)", "rgb(201, 110, 233)", "rgb(204, 109, 230)", "rgb(207, 107, 228)",
    "rgb(209, 106, 226)", "rgb(211, 104, 224)", "rgb(214, 103, 221)", "rgb(216, 102, 219)", "rgb(218, 100, 216)",
    "rgb(220, 99, 214)", "rgb(222, 97, 212)", "rgb(224, 96, 209)", "rgb(226, 95, 207)", "rgb(228, 93, 204)",
    "rgb(230, 92, 202)", "rgb(231, 91, 199)", "rgb(233, 90, 197)", "rgb(234, 88, 194)", "rgb(236, 87, 191)",
    "rgb(237, 86, 189)", "rgb(239, 85, 186)", "rgb(240, 84, 184)", "rgb(241, 83, 181)", "rgb(242, 82, 178)",
    "rgb(243, 81, 176)", "rgb(244, 80, 173)", "rgb(245, 79, 170)", "rgb(246, 78, 168)", "rgb(247, 77, 165)",
    "rgb(247, 77, 165)", "rgb(248, 76, 162)", "rgb(248, 76, 160)", "rgb(249, 75, 157)", "rgb(250, 74, 154)",
    "rgb(250, 74, 151)", "rgb(251, 73, 149)", "rgb(251, 73, 146)", "rgb(251, 73, 143)", "rgb(251, 73, 143)",
    "rgb(252, 72, 138)", "rgb(252, 72, 122)", "rgb(252, 72, 133)", "rgb(252, 72, 130)", "rgb(252, 72, 127)",
    "rgb(252, 72, 125)", "rgb(252, 72, 122)", "rgb(252, 72, 120)", "rgb(252, 73, 117)", "rgb(251, 73, 114)",
    "rgb(251, 73, 112)", "rgb(251, 74, 109)", "rgb(250, 74, 107)", "rgb(250, 75, 104)", "rgb(249, 75, 101)",
    "rgb(249, 76, 99)", "rgb(248, 77, 96)", "rgb(247, 77, 94)", "rgb(247, 78, 91)", "rgb(246, 79, 89)"];

/**
 * The array of highlight colors in the animation.
 * @const {Array<string>}
 */
const highlightColors = ["rgb(18, 194, 233, 0.3)", "rgb(10, 193, 234, 0.3)", "rgb(2, 193, 235, 0.3)", "rgb(0, 192, 236, 0.3)", "rgb(0, 191, 237, 0.3)",
    "rgb(0, 190, 239, 0.3)", "rgb(0, 190, 240, 0.3)", "rgb(0, 189, 241, 0.3)", "rgb(0, 188, 242, 0.3)", "rgb(0, 187, 243, 0.3)",
    "rgb(0, 186, 244, 0.3)", "rgb(0, 185, 245, 0.3)", "rgb(0, 184, 245, 0.3)", "rgb(0, 184, 246, 0.3)", "rgb(0, 183, 247, 0.3)",
    "rgb(0, 182, 248, 0.3)", "rgb(0, 181, 249, 0.3)", "rgb(0, 180, 249, 0.3)", "rgb(5, 179, 250, 0.3)", "rgb(14, 178, 251, 0.3)",
    "rgb(22, 177, 251, 0.3)", "rgb(28, 176, 252, 0.3)", "rgb(34, 175, 253, 0.3)", "rgb(39, 174, 253, 0.3)", "rgb(44, 173, 254, 0.3)",
    "rgb(49, 172, 254, 0.3)", "rgb(54, 170, 254, 0.3)", "rgb(58, 169, 255, 0.3)", "rgb(63, 168, 255, 0.3)", "rgb(67, 167, 255, 0.3)",
    "rgb(67, 167, 255, 0.3)", "rgb(71, 166, 255, 0.3)", "rgb(76, 165, 255, 0.3)", "rgb(80, 163, 255, 0.3)", "rgb(84, 162, 255, 0.3)",
    "rgb(89, 161, 255, 0.3)", "rgb(93, 159, 255, 0.3)", "rgb(98, 158, 255, 0.3)", "rgb(103, 156, 255, 0.3)", "rgb(107, 155, 255, 0.3)",
    "rgb(112, 153, 255, 0.3)", "rgb(117, 152, 255, 0.3)", "rgb(121, 150, 255, 0.3)", "rgb(126, 148, 255, 0.3)", "rgb(130, 146, 255, 0.3)",
    "rgb(135, 145, 255, 0.3)", "rgb(140, 143, 255, 0.3)", "rgb(144, 141, 255, 0.3)", "rgb(149, 139, 255, 0.3)", "rgb(153, 137, 254, 0.3)",
    "rgb(158, 135, 253, 0.3)", "rgb(162, 133, 251, 0.3)", "rgb(167, 130, 250, 0.3)", "rgb(171, 128, 249, 0.3)", "rgb(175, 126, 247, 0.3)",
    "rgb(180, 123, 245, 0.3)", "rgb(184, 121, 243, 0.3)", "rgb(188, 118, 241, 0.3)", "rgb(192, 116, 239, 0.3)", "rgb(196, 113, 237, 0.3)",
    "rgb(196, 113, 237, 0.3)", "rgb(199, 112, 235, 0.3)", "rgb(201, 110, 233, 0.3)", "rgb(204, 109, 230, 0.3)", "rgb(207, 107, 228, 0.3)",
    "rgb(209, 106, 226, 0.3)", "rgb(211, 104, 224, 0.3)", "rgb(214, 103, 221, 0.3)", "rgb(216, 102, 219, 0.3)", "rgb(218, 100, 216, 0.3)",
    "rgb(220, 99, 214, 0.3)", "rgb(222, 97, 212, 0.3)", "rgb(224, 96, 209, 0.3)", "rgb(226, 95, 207, 0.3)", "rgb(228, 93, 204, 0.3)",
    "rgb(230, 92, 202, 0.3)", "rgb(231, 91, 199, 0.3)", "rgb(233, 90, 197, 0.3)", "rgb(234, 88, 194, 0.3)", "rgb(236, 87, 191, 0.3)",
    "rgb(237, 86, 189, 0.3)", "rgb(239, 85, 186, 0.3)", "rgb(240, 84, 184, 0.3)", "rgb(241, 83, 181, 0.3)", "rgb(242, 82, 178, 0.3)",
    "rgb(243, 81, 176, 0.3)", "rgb(244, 80, 173, 0.3)", "rgb(245, 79, 170, 0.3)", "rgb(246, 78, 168, 0.3)", "rgb(247, 77, 165, 0.3)",
    "rgb(247, 77, 165, 0.3)", "rgb(248, 76, 162, 0.3)", "rgb(248, 76, 160, 0.3)", "rgb(249, 75, 157, 0.3)", "rgb(250, 74, 154, 0.3)",
    "rgb(250, 74, 151, 0.3)", "rgb(251, 73, 149, 0.3)", "rgb(251, 73, 146, 0.3)", "rgb(251, 73, 143, 0.3)", "rgb(251, 73, 143, 0.3)",
    "rgb(252, 72, 138, 0.3)", "rgb(252, 72, 122, 0.3)", "rgb(252, 72, 133, 0.3)", "rgb(252, 72, 130, 0.3)", "rgb(252, 72, 127, 0.3)",
    "rgb(252, 72, 125, 0.3)", "rgb(252, 72, 122, 0.3)", "rgb(252, 72, 120, 0.3)", "rgb(252, 73, 117, 0.3)", "rgb(251, 73, 114, 0.3)",
    "rgb(251, 73, 112, 0.3)", "rgb(251, 74, 109, 0.3)", "rgb(250, 74, 107, 0.3)", "rgb(250, 75, 104, 0.3)", "rgb(249, 75, 101, 0.3)",
    "rgb(249, 76, 99, 0.3)", "rgb(248, 77, 96, 0.3)", "rgb(247, 77, 94, 0.3)", "rgb(247, 78, 91, 0.3)", "rgb(246, 79, 89, 0.3)"];

// Add theme on startup
updateTheme();

// Update theme every 50 ms for animation
var interval = setInterval(updateTheme, 50);

/**
 * Updates the current color number.
 */
function updateColorNumber()
{
  if(reverse)
  {
    if(colorNumber == 0)
    {
      // Unreverse animation at start of colors array
      colorNumber++;
      reverse = false;
    }
    else
    {
      colorNumber--;
    }
  }
  else
  {
    if(colorNumber == 119)
    {
      // Reverse animation at end of colors array
      colorNumber--;
      reverse = true;
    }
    else
    {
      colorNumber++;
    }
  }
}

/**
 * Updates the theme.
 */
function updateTheme()
{
  updateColorNumber();

  /**
   * The updated theme.
   * @const {theme}
   */
  const theme =
  {
    colors:
    {
      bookmark_text: "rgb(255, 255, 255)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: colors[colorNumber],

      frame: "rgb(0, 0, 0)",
      frame_inactive: "rgb(0, 0, 0)",

      ntp_background: "rgb(0, 0, 0)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(0, 0, 0, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: highlightColors[colorNumber],
      popup_highlight_text: "rgb(255, 255, 255)",
      popup_text: "rgb(255, 255, 255)",

      sidebar: "rgba(0, 0, 0, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.3)",
      sidebar_highlight_text: "rgb(255, 255, 255)",
      sidebar_text: "rgb(255, 255, 255)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.7)",
      tab_line: colors[colorNumber],
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(0, 0, 0, 1)",
      tab_text: "rgb(255, 255, 255)",

      toolbar: "rgba(0, 0, 0, 1)",
      toolbar_bottom_separator: "rgba(0, 0, 0, 0)",
      toolbar_field: "rgba(0, 0, 0, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(0, 0, 0, 0.8)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.3)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: colors[colorNumber],
      toolbar_field_text_focus: colors[colorNumber],
      toolbar_text: "rgb(255, 255, 255)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  };

  browser.theme.update(theme);
}
