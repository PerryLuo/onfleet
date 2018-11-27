var names = [
  'MARY',
  'PATRICIA',
  'LINDA',
  'BARBARA',
  'ELIZABETH',
  'JENNIFER',
  'MARIA',
  'SUSAN',
  'MARGARET',
  'DOROTHY',
  'LISA',
  'NANCY',
  'KAREN',
  'BETTY',
  'HELEN',
  'SANDRA',
  'DONNA',
  'CAROL',
  'RUTH',
  'SHARON',
  'MICHELLE',
  'LAURA',
  'SARAH',
  'KIMBERLY',
  'DEBORAH',
  'JESSICA',
  'SHIRLEY',
  'CYNTHIA',
  'ANGELA',
  'MELISSA',
  'BRENDA',
  'AMY',
  'ANNA',
  'REBECCA',
  'VIRGINIA',
  'KATHLEEN',
  'PAMELA',
  'MARTHA',
  'DEBRA',
  'AMANDA',
  'STEPHANIE',
  'CAROLYN',
  'CHRISTINE',
  'MARIE',
  'JANET',
  'CATHERINE',
  'FRANCES',
  'ANN',
  'JOYCE',
  'DIANE',
  'ALICE',
  'JULIE',
  'HEATHER',
  'TERESA',
  'DORIS',
  'GLORIA',
  'EVELYN',
  'JEAN',
  'CHERYL',
  'MILDRED',
  'JAMES',
  'JOHN',
  'ROBERT',
  'MICHAEL',
  'WILLIAM',
  'DAVID',
  'RICHARD',
  'CHARLES',
  'JOSEPH',
  'THOMAS',
  'CHRISTOPHER',
  'DANIEL',
  'PAUL',
  'MARK',
  'DONALD',
  'GEORGE',
  'KENNETH',
  'STEVEN',
  'EDWARD',
  'BRIAN',
  'RONALD',
  'ANTHONY',
  'KEVIN',
  'JASON',
  'MATTHEW',
  'GARY',
  'TIMOTHY',
  'JOSE',
  'LARRY',
  'JEFFREY',
  'FRANK',
  'SCOTT',
  'ERIC',
  'STEPHEN',
  'ANDREW',
  'RAYMOND',
  'GREGORY',
  'JOSHUA',
  'JERRY',
  'DENNIS',
  'WALTER',
  'PATRICK'
];
const data = new Array();

// Method on how to setTimeout within for loop looked
// on https://stackoverflow.com/questions/7749090/how-to-use-setinterval-function-within-for-loop
for (var i = 0; i < names.length; i++) {
  setTimeout(
    (j) => {
      let person = new Object();
      person.number = j;
      person.name = names[j];
      data.push(person);
    },
    i * 1000,
    i
  );
}

module.exports = data;
