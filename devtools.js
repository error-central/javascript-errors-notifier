// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The function below is executed in the context of the inspected page.
var page_getProperties = function () {
  return "hallo!";
};

chrome.devtools.panels.elements.createSidebarPane(
  "jQuery Properties",
  function (sidebar) {
    function updateElementProperties() {
      sidebar.setExpression("(" + page_getProperties.toString() + ")()");
    }
    updateElementProperties();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
  });
