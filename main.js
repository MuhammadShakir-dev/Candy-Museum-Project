  <!--Custom Javascript-->
  <script>
    $(function () {
      $(document).scroll(function () {
        var $nav = $("#mainNavBar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      });
    });
  </script>
