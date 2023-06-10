function updateColors() {
    var brandColor = document.getElementById("brand-color").value;
  
    document.documentElement.style.setProperty('--bb-partner-primary', brandColor);
  
    var lighterColor = lightenColor(brandColor, 10);
    var darkerColor = darkenColor(brandColor, 10);
  
    document.documentElement.style.setProperty('--bb-primary-1', lighterColor);
    document.documentElement.style.setProperty('--bb-primary-3', darkerColor);
  }
  
  function lightenColor(color, percentage) {
    var parsedColor = parseColor(color);
  
    var hslColor = rgbToHSL(parsedColor.r, parsedColor.g, parsedColor.b);
    hslColor[2] = Math.min(100, hslColor[2] + percentage);
  
    var rgbColor = hslToRGB(hslColor[0], hslColor[1], hslColor[2]);
    return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
  }
  
  function darkenColor(color, percentage) {
    var parsedColor = parseColor(color);
  
    var hslColor = rgbToHSL(parsedColor.r, parsedColor.g, parsedColor.b);
    hslColor[2] = Math.max(0, hslColor[2] - percentage);
  
    var rgbColor = hslToRGB(hslColor[0], hslColor[1], hslColor[2]);
    return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
  }
  
  function parseColor(color) {
    var hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (hexMatch) {
      return {
        r: parseInt(hexMatch[1], 16),
        g: parseInt(hexMatch[2], 16),
        b: parseInt(hexMatch[3], 16)
      };
    }
  
    var rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i);
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1], 10),
        g: parseInt(rgbMatch[2], 10),
        b: parseInt(rgbMatch[3], 10)
      };
    }
  
    // Handle other color formats like HSL, RGBA, etc.
  
    return null;
  }
  
  function rgbToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
  
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  
  function hslToRGB(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
  
    var r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      var hue2RGB = function hue2RGB(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = Math.round(hue2RGB(p, q, h + 1 / 3) * 255);
      g = Math.round(hue2RGB(p, q, h) * 255);
      b = Math.round(hue2RGB(p, q, h - 1 / 3) * 255);
    }
  
    return [r, g, b];
  }
  

//   toggle nav bar
var toggleNavButton = document.getElementById("toggle-nav");
var navContainer = document.getElementById("bb-controller");

toggleNavButton.addEventListener("click", function() {
  navContainer.classList.toggle("show-nav");
});

// upload image
var cobrandInput = document.getElementById("cobrand-upload");
var cobrandImage = document.getElementById("cobrand");

cobrandInput.addEventListener("change", function(event) {
  var file = event.target.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      cobrandImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
