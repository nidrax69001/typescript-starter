import { Injectable } from '@nestjs/common';

@Injectable()
export class FacturXService {
  VERSION = '1.0';
  FACTURX_ENCODING = 'UTF-8';
  FACTURX_FILENAME = 'factur-x.xml';
  FACTURX_PROFIL_TO_XSD = {
    minimum: 'factur-x/minimum/FACTUR-X_MINIMUM.xsd',
    basicwl: 'factur-x/basic-wl/FACTUR-X_BASIC-WL.xsd',
    basic: 'factur-x/basic/FACTUR-X_BASIC.xsd',
    en16931: 'factur-x/en16931/FACTUR-X_EN16931.xsd',
    extended: 'factur-x/extended/FACTUR-X_EXTENDED.xsd',
    zugferd: 'zugferd/ZUGFeRD1p0.xsd',
  };
  FACTURX_PROFIL_TO_XMP = {
    minimum: 'MINIMUM',
    basicwl: 'BASIC WL',
    basic: 'BASIC',
    en16931: 'EN 16931',
    extended: 'EXTENDED',
  };
  FACTURX_XMP = 'Factur-X_extension_schema.xmp';

  public generateFacturX(args: FactureXArgs) {}
}

interface FactureXArgs {
  pdf: string;
  xml: string;
  profile: Profile;
  checkXsd: boolean;
  filename: string;
  relationship: Relationship;
}

enum Profile {
  AUTODETECT = 'autodetect',
  MINIMUM = 'minimum',
  BASICWL = 'basicwl',
  BASIC = 'basic',
  EN16931 = 'en16931',
}

enum Relationship {
  ALTERNATIVE = 'Alternative',
  DATA = 'Data',
  SOURCE = 'Source',
}
